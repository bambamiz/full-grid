const pixsbutton = document.querySelector("#pixsbutton");
const container = document.querySelector("#container");
let gridsq = null;
const grid = [];



function asign() {
    gridsq = document.querySelector("#pixs")
    document.getElementsByTagName("body").innerHTML = gridsq.value;
    
    for (let i = 0; i < gridsq.value; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row)
        for (let n = 0; n < gridsq.value; n++) {
            const square = document.createElement("div");
            square.classList.add("box");
            row.appendChild(square)

            square.addEventListener("mouseover", function () {
                color();
            });
            
        }
        console.log(i);
    }
    
}

pixsbutton.addEventListener("click", function() {
    asign();
});

function color() {
    const collection = document.getElementsByClassName("box");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "red";
    }
}