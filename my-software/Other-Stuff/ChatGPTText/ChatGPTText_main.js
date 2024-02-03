async function sleep(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function splitWordInHalf(word) {
    return [word.slice(0, Math.floor(word.length/2)), word.slice(Math.floor(word.length/2)), word.length];
}

async function outputText() {
    document.getElementById("Text_Gen_Area").innerText = "";
    var text = document.getElementById("textInput").value;
    var words = text.split(' ');

    for (const element of words) {
        var waitTime = getRandomInt(100, 300);
        console.log(waitTime);
        await sleep(waitTime);
        document.getElementById("Text_Gen_Area").innerHTML += splitWordInHalf(element)[0];

        waitTime = getRandomInt(100, 300);
        console.log(waitTime);
        await sleep(waitTime);
        document.getElementById("Text_Gen_Area").innerHTML += splitWordInHalf(element)[1] + " ";        
    }
}

