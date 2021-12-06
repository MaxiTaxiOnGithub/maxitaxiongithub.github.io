function setHomeActive() {
    document.getElementById("home-button").classList.add("active")
    document.getElementById("steckbrief-button").classList.remove("active")
    document.getElementById("hobbys-button").classList.remove("active")
    document.getElementById("alcohol-button").classList.remove("active")
}

function setSteckbriefActive() {
    document.getElementById("steckbrief-button").classList.add("active")
    document.getElementById("home-button").classList.remove("active")
    document.getElementById("hobbys-button").classList.remove("active")
    document.getElementById("alcohol-button").classList.remove("active")
}

function setHobbysActive() {
    document.getElementById("hobbys-button").classList.add("active")
    document.getElementById("home-button").classList.remove("active")
    document.getElementById("steckbrief-button").classList.remove("active")
    document.getElementById("alcohol-button").classList.remove("active")
}

function setAlcoholActive() {
    document.getElementById("home-button").classList.remove("active")
    document.getElementById("steckbrief-button").classList.remove("active")
    document.getElementById("hobbys-button").classList.remove("active")
    document.getElementById("alcohol-button").classList.add("active")
}