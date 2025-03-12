function changeMode() {
    var mode = document.getElementById("logmode")
    var body = document.getElementById("body")
    var loglight = document.getElementById("imglight")
    console.log(body)
    // var img_bg = document.getElementsByClassName("img-style")
    if (mode.classList.contains("fa-cloud-moon")) {
        body.classList.add("darkmode")
        loglight.setAttribute("src", "../images/footer-logo.svg")
        mode.classList.remove("fa-cloud-moon")
        mode.classList.add("fa-sun")
    }
    else {
        body.classList.remove("darkmode")
        loglight.setAttribute("src", "../images/logo.svg")
        mode.classList.add("fa-cloud-moon")
        mode.classList.remove("fa-sun")
    }
}
