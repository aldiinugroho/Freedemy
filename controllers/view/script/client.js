// console.log("hello");

// const form = document.getElementById("datald")
const LoadingElement = document.getElementById("ld")
const form = document.getElementById("datald")
const dataToshow = document.querySelector("#dataToshow")

const API_URL = "http://192.168.100.53:3000/userdat"
const API_URL_TEST = "http://192.168.100.53:3000/test"
const min = 1 * 60
const Rmin = min * 1000

try {
    // fetch data
    getdat()
    getAll()

    // reload page
    window.onload = timedRefresh(Rmin);

    // hide login and show loading
    LoadingElement.style.display = "none"
    document.getElementById("klk").addEventListener("click", () => {
        form.style.display = "none"
        LoadingElement.style.display = ""
    })
} catch (error) {
    // tambahin sesuatu kalau mau
}

async function getAll() {
    try {
        // LoadingElement.style.display = ""
        const response = await fetch(API_URL_TEST)
        const data = await response.json()
        const AllData = data
        AllData.reverse()
        AllData.forEach(user => {
        const div = document.createElement("div")
        const us = document.createElement("p")
        us.textContent = user.username

        const em = document.createElement("p")
        em.textContent = user.email

        div.appendChild(us)
        div.appendChild(em)
        dataToshow.appendChild(div)
    });
    } catch (error) {
        
    }
}

async function getdat(){
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        document.getElementById("name").innerHTML = "Hai, "+data.username;
        // form.style.display = "none"
        // LoadingElement.style.display = ""
    } catch (error) {

    }
}

// refresh page
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
