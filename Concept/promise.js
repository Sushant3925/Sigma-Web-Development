console.log("Sushant is a hacker")
console.log("Sushant is a hecker")

//Asynchronious neture of js 
//this block will execute at backend and shows output after the end

// setTimeout(()=>{
// console.log("inside the time out");
// },2000)

// setTimeout(()=>{
// console.log("inside the time out 2");
// },0)

// console.log("The end")

//callback - in every function there is a function call

//promise

console.log("promise concept")
let prom1 = new Promise((resolve,reject)=>
{
    let a = Math.random()
    if(a<0.5)
    {
        reject("random number was not supported.")
    }
    else{
        console.log(a)
        setTimeout(() =>{
            console.log("Yes I am done")
            resolve("sushant")
        },3000)
    }
})
let prom2 = new Promise((resolve,reject)=>
{
    let a = Math.random()
    if(a<0.5)
    {
        reject("random number was not supported. 2")
    }
    else{
        console.log(a)
        setTimeout(() =>{
            console.log("Yes I am done 2")
            resolve("sushant 2")
        },1000)
    }
})

// let p2 =Promise.all([prom1,prom2])
//returns status and value of rejecting
// let p2 =Promise.allSettled([prom1,prom2])
// let p2 =Promise.race([prom1,prom2])

let p2 =Promise.any([prom1,prom2])
p2.then((a)=>
{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})