const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.width = "960px";  
container.style.height = "960px"; 
container.style.overflow = "hidden"; 

const btn = document.querySelector("#btn");

function addHoverEffect() {
    const gridsqrs = document.querySelectorAll(".gridsquare");
    gridsqrs.forEach(gridsqr => {
        gridsqr.addEventListener("mouseover", () => {
            gridsqr.style.backgroundColor = gridsqr.style.backgroundColor === "black" ? "" : "black";
        });
    });
}

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
    container.innerHTML = ""; // Clear the container before generating the grid
    for (let i = 0; i < number; i++) { 
        let row = document.createElement("div"); 
        row.className = "row"; 
        row.style.display = "flex"; 
        row.style.width = "100%";  

        for (let x = 0; x < number; x++) { 
            let cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
    }

    // Set the size of the squares dynamically
    const gridsqrs = document.querySelectorAll(".gridsquare");
    const size = 960 / number;
    gridsqrs.forEach(gridsqr => {
        gridsqr.style.height = `${size}px`;
        gridsqr.style.width = `${size}px`;
    });

    // Apply the hover effect to newly created grid squares
    addHoverEffect();
}

// Initialize the grid with default size (16)
genDivs(16);
