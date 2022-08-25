const knex=require('knex')({
    client:'mysql',
    connection:{
      host: "localhost",
      user: "root",
      password: "Vishu@1234",
      database: "Salary_Data",
    }
})

knex.schema.hasTable('Salary_Data').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Salary', function(t) {
        t.increments('User_id').primary();
        t.string('Timestamp',255);
        t.string('Age', 255);
        t.string('Working_Industry_Name', 255);
        t.string('Jobtitle', 255);
        t.string('Annualsalary', 255);
        t.string('Currency', 255);
        t.string('Location', 255);
        t.string('Experience', 255);
        t.string('Additional_Info', 255);
        t.string("Other",255)

        
      })
      .then((data)=>{
          console.log("Table created")
      }).catch((err)=>{
          console.log("Table already exist !!")
      })
    }

  });

  module.exports=knex
