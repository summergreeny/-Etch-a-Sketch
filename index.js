import { createEle, appendEleChild } from "./util/domops.js";

let buttonContainer = createEle({
  type: "div",
  classes: ["button-container"],
});

let buttonContainer2 = createEle({
  type: "div",
  classes: ["button-container"],
});

let wholeContainer = createEle({
  type: "div",
  classes: ["whole-container"],
});

let gridNum = 4;

const isInteger = (value) => /^\d+$/.test(value);

const handleUserInput = () => {
  let userInput = window.prompt("Please enter number between 1 to 100", 4);
  if (userInput === null) {
    return;
  }
  if (!isInteger(userInput) || userInput < 1 || userInput > 100) {
    alert("Please enter a number between 0 and 100");
  } else {
    gridNum = parseInt(userInput); // Convert userInput to integer
    document.querySelectorAll(".row").forEach((row) => {
      row.remove();
    });
    resetGrid(gridNum, "black");
  }
};

let resetButton = createEle({
  type: "button",
  innerHTML: "Reset Size",
  classes: ["reset"],
  event: {
    click: handleUserInput, // Assign the function directly
  },
});

let handleRainbow = () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = getRandomRGB();
    });
  });
};

const handSelection = () => {
  let selectedColor = colorInput.value;
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = selectedColor;
    });
  });
};

let colorInput = createEle({
  type: "input",
  attributes: {
    type: "color",
    id: "head",
    name: "head",
    value: "#e66465",
  },
});
let selectColorButton = createEle({
  type: "button",
  innerHTML: "Select Color", // Set the button text
  classes: ["reset"],
  event: {
    click: handSelection,
  },
});
selectColorButton.appendChild(colorInput);

let rainbowButton = createEle({
  type: "button",
  innerHTML: "Rainbow Color",
  classes: ["reset"],
  event: {
    click: handleRainbow, // Assign the function directly
  },
});

const handleClearGrid = () => {
  document.querySelectorAll(".row").forEach((row) => {
    row.remove();
  });
  resetGrid(gridNum, "black");
};

let clearButton = createEle({
  type: "button",
  innerHTML: "Clear Grid",
  classes: ["reset"],
  event: {
    click: handleClearGrid, // Assign the function directly
  },
});

appendEleChild(buttonContainer, [resetButton, clearButton, rainbowButton]);
appendEleChild(buttonContainer2, [rainbowButton, selectColorButton]);

let container = createEle({
  type: "div",
  classes: ["grid-container"],
});

appendEleChild(document.body, [wholeContainer]);

appendEleChild(wholeContainer, [buttonContainer, buttonContainer2, container]);

const resetGrid = (gridNum, color = "black") => {
  for (let i = 0; i < gridNum; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    appendEleChild(container, [row]);

    for (let j = 0; j < gridNum; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = color;
    });
  });
};

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

resetGrid(gridNum);
