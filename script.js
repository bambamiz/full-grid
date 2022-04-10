const pixs = document.querySelector("#pixsbutton");
let gridsq = null;

function asign() {
    gridsq = document.querySelector("#pixs")
    

    for (let i = 0; i < gridsq.value; i++) {
        console.log(i);
    }

    document.getElementById("container").innerHTML = gridsq.value;
}

pixs.addEventListener("click", function() {
    asign();
});
