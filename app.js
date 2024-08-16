let container = document.querySelectorAll(".container")[0];
let inpEle = document.querySelectorAll(".inp")[0];
let h1Ele = document.querySelectorAll("h1")[0];
let tempSelect = document.querySelector("#temp");

console.log(tempSelect)

function tempConverter() {
    let recInp = Number(inpEle.value);
    let selectedOption = tempSelect.value;

    if(selectedOption === "Celsius to Fahrenheit") {
        h1Ele.innerHTML = `Celsius to Fahrenheit: ${(recInp * 9 / 5) + 32}°F`; 
    } 
    else if(selectedOption === "Celsius to Kelvin") {
        h1Ele.innerHTML = `Celsius to Kelvin: ${recInp + 273.15} K`; 
    }
     else if(selectedOption === "Fahrenheit to Celsius") {
        h1Ele.innerHTML = `Fahrenheit to Celsius: ${(recInp - 32) * 5/9}°C`; 
    }
     else if(selectedOption === "Fahrenheit to Kelvin") {
        h1Ele.innerHTML = `Fahrenheit to Kelvin: ${((recInp - 32) * 5/9) + 273.15} K`; 
    }
     else if(selectedOption === "Kelvin to Celsius") {
        h1Ele.innerHTML = `Kelvin to Celsius: ${recInp - 273.15}°C`; 
    }
     else if(selectedOption === "Kelvin to Fahrenheit") {
        h1Ele.innerHTML = `Kelvin to Fahrenheit: ${((recInp - 273.15) * 9/5) + 32}°F`;
    }
     else {
        h1Ele.innerHTML = "Sorry Not Found Your City In My App";
    }
}

