// console.log("hello");

const API_URL = "http://localhost:3000/userdat"

async function getdat(){
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        document.getElementById("name").innerHTML = data.username;
        document.getElementById("email").innerHTML = data.email;
    } catch (error) {
        console.log("Freedemy.")
    }
}

try {
    getdat()
} catch (error) {
    console.log("something went wrong")
}