const buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";

const button = document.createElement("button");
button.textContent = "Make a new grid";
button.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of squares for each side. (1-100)")

    if (userInput <= 100 && userInput >= 1) {
        const existingContainer = document.getElementById("container");
        if (existingContainer) {
            document.body.removeChild(existingContainer);
        }

        const container = document.createElement("div");
        container.id = "container";

        for (let i = 1; i <= userInput; i++) {
            const row = document.createElement("div");
            row.classList.add("row");  

            for (let j = 1; j <= userInput; j++) {
                const box = document.createElement("div");
                box.classList.add("box");
        
             box.addEventListener("mouseover", () => {
                 box.style.backgroundColor = "lightblue";
            });

            row.appendChild(box);
        }

        container.appendChild(row);
    }

    document.body.appendChild(container);
    } else {
        alert("Please enter a number between 1 and 100")
    }
});

buttonContainer.appendChild(button);

const container = document.createElement("div");
container.id = "container";

const rows = [];
for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");  

    for (let j = 1; j <= 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "lightblue";
        });

        row.appendChild(box);
    }

    rows.push(row);
};

rows.forEach(row => container.appendChild(row));
document.body.appendChild(buttonContainer);
document.body.appendChild(container);