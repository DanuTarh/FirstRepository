console.log("Hello from js file!");

function secondButton() {
    const namn = prompt("Vad heter du?");
    alert ("Hello " + namn);
}


function vad() {
 
    const namn = document.getElementById("namn").value;
    console.log(namn);
    if (namn == "Danu") {
        namn = namn + " Tarhonen";
    } 
    else 
    {

        console.log("Okänt efternamn")
    }
    
    document.querySelector('#hello-output').innerText = "Morjens " + namn + "!";
}


