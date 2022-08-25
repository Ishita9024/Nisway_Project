# SALARY SHEET

For this project I will be examining some details of the employees with salaries.We are giving one CSV file so I convert this file into JSON file by online converter. After that I performed some http methods to get the required details.

    -fetch list of salary data using GET API
    -Filter data by one or more fields 
    -Sort data by one or more fields/attributes 
    -fetch a single record by id via GET request



### TECH STACK

-Express

-Mysql

-Knex

-Body Parser

-Node.Js



### HOW TO RUN ?

Now, navigate to index.js file on your terminal, and run the following command to start your localhost server

node index.js



### ENDPOINTS

1. /get_data
    .This end point get all the data from the sheet.

2. /sort
    .This end point sort data with a particular field.

3. /getsinglerecord
    .This end point get single record from the given data.

4. /delete_data
    .This end point deletes particular field from data.

5. /post_data
    .This end point is used to enter new data in data.




Now ,open your browser and type 
http://localhost:{PORT}/{YOUR_ENDPOINT} to get the required details.

*Happy Coding ):*

