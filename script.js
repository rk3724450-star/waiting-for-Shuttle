let crowdLevels = ["Low", "Moderate", "High"];
let currentCrowd = 0;

function changeCrowd() {
    currentCrowd =
        (currentCrowd + 1) % crowdLevels.length;

    document.getElementById("crowd").innerText =
        crowdLevels[currentCrowd];
}

function submitFeedback(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message =
        document.getElementById("message").value;

    document.getElementById("result").innerText =
        "Thank you " + name +
        "! Your feedback has been received.";

    console.log("Feedback:", message);

    event.target.reset();
}