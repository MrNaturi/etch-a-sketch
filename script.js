const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.width = "960px";  
container.style.height = "960px"; 
container.style.overflow = "hidden"; 

const btn = document.querySelector("#btn")
const numprompt = () => {
    const ans = prompt("How many squares would you like on the row of your grid?");
    const numb = parseInt(ans);
    if (!isNaN(numb) && numb > 0 && numb <= 100) {
        genDivs(numb);
    } else {
        alert("Please enter a valid number greater than zero or less than 101.");
    }
};
btn.onclick = numprompt;

function genDivs(number) {
    container.innerHTML = ""; 
    for (var i = 0; i < number; i++) { 
        var row = document.createElement("div"); 
        row.className = "row"; 
        row.style.display = "flex"; 
        row.style.width = "100%";  

        for (var x = 0; x < number; x++) { 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
    }
    const gridsqrs = document.querySelectorAll(".gridsquare");
    const size = 960 / number;
    gridsqrs.forEach(gridsqr => {
        gridsqr.style.height = `${size}px`;
        gridsqr.style.width = `${size}px`;
    });
}
genDivs(numb = 16)
