var create=require('./db')
const data=require('../csv_to_json.json')
for (i of data){
    create('Salary').insert({
        Timestamp: i.Timestamp,
        Age: i.Age,
        Working_Industry_Name: i.Working_Industry_Name,
        Jobtitle: i.Jobtitle,
        Annualsalary:i.Annualsalary,
        Currency: i.Currency,
        Location:i.Location,
        Experience: i.Experience,
        Additional_Info: i.Additional_Info,
        Other:i.Other
    })
    .then((data)=>{
        console.log('data inserted successfully')
    }).catch((err)=>{
        console.log('Problem in insertion')
    })

}