setTimeout(function () {
  console.log("running unspoiled 2")
  removeClass("team-a-winner")
  removeClass("team-b-winner")
  removeClass("tied")
  removeElementsByClassName("score")
  removeElementsByClassName("players")
}, 1000)

function removeClass(className) {
  const elements = document.getElementsByClassName(className)
  let element
  let index
  for (index = 0; index < elements.length; index++) {
    console.log(index)
    console.log(elements[index])
    element = elements[index]
    element.classList.remove(className)
  }
}

function removeElementsByClassName(className) {
  const elements = document.getElementsByClassName(className);

  while(elements[0]) {
    elements[0].parentNode.removeChild(elements[0])
  }
}
