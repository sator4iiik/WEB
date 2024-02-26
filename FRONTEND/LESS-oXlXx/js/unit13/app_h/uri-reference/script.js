/***************************************
 **************  MODEL  ***************/

let age = 18

function plusAge() {
  age = age + 1
}

function lose10Years() {
  age = age - 10
}

/**************************************/
/***************************************
 ************  CONTROLLER  ************/

startPage()

function startPage() {
  lose10Years()
  console.log(age)
  renderSpan(age)
}

function handlePlusAge() {
  plusAge()
  renderSpan(age)
}

/**************************************/
/***************************************
 **************  VIEW  ****************/

const button = document.querySelector('button')
button.onclick = handlePlusAge

function renderSpan(paramAge) {
  const span = document.querySelector('span')
  span.textContent = paramAge
}

/**************************************/
