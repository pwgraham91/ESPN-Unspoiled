setInterval(modifyHtml, 200)

function modifyHtml() {
  removeClass("team-a-winner")
  removeClass("team-b-winner")
  removeClass("tied")
  removeElementsByClassName("score")
  removeElementsByClassName("players")
  removeElementById("global-scoreboard")
  removeElementById("now-feed")
}

function removeClass(className) {
  const elements = document.getElementsByClassName(className)

  while (elements[0]) {
    elements[0].classList.remove(className)
  }
}

function removeElementsByClassName(className) {
  const elements = document.getElementsByClassName(className);

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0])
  }
}

function removeElementById(idName) {
  document.getElementById(idName).remove()
}
