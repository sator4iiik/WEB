function renderMain(hint, energy, percent, electricity) {
  const elMain = document.querySelector('.main')
  const elContainer = document.createElement('div')
  const elWrap = document.createElement('div')
  const elH3Top = document.createElement('h3')
  const elTopP = document.createElement('p')
  const elMiddleP = document.createElement('p')
  const elBottomP = document.createElement('p')
  const elH3Bottom = document.createElement('h3')

  elH3Top.innerHTML = `>>>>>> ${hint} <<<<<<`
  elTopP.innerHTML = `произведенная энергия = ${energy}`
  elMiddleP.innerHTML = `порог % = ${percent}`
  elBottomP.innerHTML = `потребление = ${electricity}`
  elH3Bottom.innerHTML = `>>>>>>>>>>>>>>>>>>>>>>>>>>>`

  elContainer.classList.add('container')
  elWrap.classList.add('wrap')

  elMain.appendChild(elContainer)
  elContainer.appendChild(elWrap)
  elWrap.appendChild(elH3Top)
  elWrap.appendChild(elTopP)
  elWrap.appendChild(elMiddleP)
  elWrap.appendChild(elBottomP)
  elWrap.appendChild(elH3Bottom)

  // Добавить слеши
}
