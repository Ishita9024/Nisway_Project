const express=require("express");
const { get_data, getdata_by_Salary, sort_data, get_record_by_id, delete_data, post_data } = require("../controller/users");
const router=express.Router();


router.get('/get_data',get_data)
router.get('/get_by_salary/:Annualsalary',getdata_by_Salary)
router.get("/sort",sort_data)
router.get("/getsinglerecord/:user_id",get_record_by_id)
router.post("/post_data",post_data)
router.delete('/deletemethod/:Industry',delete_data)

module.exports={router}