import mongoose from  "mongoose"

const employeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    IsManager:Boolean
})

export const employee = mongoose.model('employee',employeeSchema)