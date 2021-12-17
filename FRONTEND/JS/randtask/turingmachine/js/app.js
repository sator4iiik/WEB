const tapeSize = 20;
const configuration = {
  potato: {
    write: "blank",
    move_tape: "right",
    next_state: "q2"
  },
  blank: {
    write: "tractor",
    move_tape: "right",
    next_state: "q2"
  },
  tractor: {
    write: "potato",
    move_tape: "exit",
    next_state: "q1"
  }
};
const classArray = Object.keys(configuration);
const tapeElement = document.getElementById("tape");

const runButton = document.getElementById("run");
const stepButton = document.getElementById("step");
const resetButton = document.getElementById("reset");

buildTape();

let activeCell = document.getElementsByClassName("active")[0];
let exitNow = false;

checkTableRule();

function buildTape() {
  tapeElement.classList = "q1";
  tapeElement.innerHTML = "";
  for (let i = 0; i < tapeSize; i++) {
    const activeClass = i === 0 ? "active" : "";
    const randState = classArray[Math.floor(Math.random() * 3)];
    const theHTMLToInsert = `<div class="${randState} ${activeClass}"></div>`;
    tapeElement.insertAdjacentHTML("beforeend", theHTMLToInsert);
  }
}

stepButton.onclick = (e) => {
  if (!exitNow) {
    moveForward();
    checkTableRule();
  }
};

let timerArray = new Array();
runButton.onclick = (e) => {
  for (let i = 1; i < tapeSize; i++) {
    let timer = setTimeout(() => {
      if (!exitNow) {
        moveForward();
        checkTableRule();
      }
    }, i * 100);
    timerArray.push(timer);
  }
};

function moveForward() {
  const nextCell = activeCell.nextSibling;
  if (nextCell) {
    activeCell.classList.remove("active");
    checkCellRule(activeCell);
    nextCell.classList.add("active");
    activeCell = document.getElementsByClassName("active")[0];
    exitNow = checkExit(nextCell);
    if (exitNow) {
      tapeElement.classList.add("end");
    }
  }
}

function checkTableRule() {
  const ruleTable = document.getElementById("rules");
  ruleTable.classList = tapeElement.classList[0];
  ruleTable.classList.add(activeCell.classList[0]);
}
function checkCellRule(cell) {
  const currentClass = cell.classList[0];
  const rule = configuration[currentClass];
  cell.classList = rule.write;
  tapeElement.classList = rule.next_state;
}
function checkExit(cell) {
  if (tapeElement.classList.contains("q2")) {
    return configuration[cell.classList[0]].move_tape === "exit";
  } else {
    return false;
  }
}

resetButton.onclick = (e) => {
  timerArray.forEach((timer) => {
    console.log(timer);
    clearTimeout(timer);
  });
  buildTape();
  activeCell = document.getElementsByClassName("active")[0];
  exitNow = false;
  checkTableRule();
};
