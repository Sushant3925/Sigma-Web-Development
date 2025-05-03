//asycs await are used to control Async property of js

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}

async function main(){

    console.log("Loading module")
    console.log("Do simething else")
    console.log("Load data")
    
    //wait for getting data load
    let data  = await getData()
    
    console.log("Data")
    console.log("Process data")
    console.log("task 2")
}
main()
    