// toogle button
let modeBtn = document.querySelector("#modeBtn");
let currentMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currentMode === "light"){
        currentMode = "dark"
        document.querySelector("body").style.backgroundColor= "black";
    }
    else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(currentMode);
})