var knex=require("../Databases/db")
const bodyparser=require("body-parser")
var data=require("../csv_to_json.json");
var req=require("readline-sync")
var choice_of_field=req.question("Which field you want to sort from given data :  ")



// salary data via API GET request

const get_data=(req,res)=>{
    res.json(data)
}


// Filter any field from given data by changing field name in query

const getdata_by_Salary=(req,res)=>{
    knex('Salary').select("*").where({Annualsalary:req.params.Annualsalary}) // (Example-data by Salary)
    .then((data)=>{
        res.send(data)

    })
}

// Sort any field from data of your choice
// For Ascending-'asc' and For Descending-'desc

const sort_data=(req,res)=>{

    knex
  .select()
  .table('Salary')
  .orderBy(choice_of_field, 'desc')
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({message:err})
    })
}

// Fetch record by id 
const get_record_by_id=(req,res)=>{
    knex('Salary').select("*").where({user_id:req.params.user_id})
    .then((data)=>{
        res.send(data)

    })
}

// Post new salary record in given data
const post_data=(req,res)=>{
        const data={
            Timestamp: req.body.Timestamp,
            Age: req.body.Age,
            Working_Industry_Name: req.body.Working_Industry_Name,
            Jobtitle: req.body.Jobtitle,
            Annualsalary:req.body.Annualsalary,
            Currency: req.body.Currency,
            Location:req.body.Location,
            Experience: req.body.Experience,
            Additional_Info: req.body.Additional_Info,
            Other:req .body.Other
        }
        knex('Salary').insert( data).then(()=>{
            res.send({message:"data post successfully"})
            console.log("Data inserted")
        }).catch((err)=>{
            console.log("Data does not inserted")
        })
}

// Delete particular record from data

const delete_data=(req,res)=>{
    knex.delete("*").from("Salary").where("Industry","=",req.params.Industry)
    .then((data)=>{
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"data delete"})
        console.log(err)
    })
}





module.exports={get_data,
            getdata_by_Salary,
            sort_data,
            get_record_by_id,
            post_data,
            delete_data}