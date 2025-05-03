// document.body.style.backgroundColor = "gold";

// document.getElementById("Box1").style.backgroundColor = "grey";
// document.getElementById("Box2").style.backgroundColor = "red";
// document.getElementById("Box3").style.backgroundColor = "orange";
// document.getElementById("Box4").style.backgroundColor = "white";
// document.getElementById("Box5").style.backgroundColor = "green";

// console.log(document.body.childNodes)


console.log(document.querySelector(".container").childNodes)
 let boxes = document.querySelector(".container").children
 console.log(boxes)

function generate_random_color()
{
    let r1 = Math.floor((Math.random() *255)+1);
    let r2 = Math.floor((0 + Math.random() *255)+1);
    let r3 = Math.floor((0 + Math.random() *255)+1);
    console.log(r1)
    let color= `rgb(${r1},${r2},${r3})`
    return color
}

Array.from(boxes).forEach(e => {
    console.log(e.style.backgroundColor = generate_random_color())
    // e.innerHTML(c)
});
