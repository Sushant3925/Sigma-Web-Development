//create database
use("Student_data")

//Create_Collection
db.createCollection("Senior")

//insertOne
db.senior.insertOne({
    Name: "Saurabh",
    Education: "Graduate",
    address: "Loni-Dhamni"
})

//insertMany
// db.senior.insertMany([
//    {
//     Name:"Saurabh",
//     Education:"Graduate",
//     address:"Loni-Dhamni"
//    },

//    {
//     Name:"sushant",
//     Education:"Graduate-BCS",
//     address:"Solapur"
//    },
//    {
//     Name:"Amit",
//     Education:"Graduate",
//     address:"Sangali Aatpadi"
//    },
//    {
//     Name:"Nayan",
//     Education:"Graduate-BCA",
//     address:"Loni-Dhamni"
//    }
// ])

// find 
let a = db.senior.find({ address: "Loni-Dhamni" })
console.log(a.count())

//Update
db.senior.updateOne({ address: "Loni-Dhamni" }, { $set: { address: "Pune" } })

//UpdateMany
db.senior.updateMany({ address: "Loni-Dhamni" }, { $set: { address: "Pune" } })



let b = db.senior.find({address:"Pune"})
console.log(b.count)

//DeleteOne
db.senior.deleteMany({ address: "Pune" })