const btnElement = document.querySelector("#js-btn");
const mikuHatsune = document.querySelector("#miku");

btnElement.addEventListener("click", () => {
    if(mikuHatsune.style.visibility === "hidden") {
        mikuHatsune.style.visibility = "visible";
        btnElement.textContent = "Hide Miku!";
    }
    else {
        mikuHatsune.style.visibility = "hidden";
        btnElement.textContent = "Show Miku!";
    }
});



// this is how to show & hide HTML elements