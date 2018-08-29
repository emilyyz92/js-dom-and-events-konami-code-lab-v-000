const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const listenedBody = document.body
  listenedBody.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)
    if (code.some(element => element === key )) {
      window.alert("Konami Code")
    }
  })
}
