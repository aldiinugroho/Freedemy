console.log("hello");

const API_URL = "http://localhost:3000/homepage"

async function getUdata(){
    const response = await fetch(API_URL, {method: "GET"});
    const data = await response.json();
    console.log(data)
}

getUdata();

