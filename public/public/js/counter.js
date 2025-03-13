const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://ackh3ut2mvfgc33x2ui6d2b7oa0tkdzx.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = data.views;  // Assuming your Lambda returns {views: number}
    } catch (error) {
        console.log('Error:', error);
    }
}

updateCounter();