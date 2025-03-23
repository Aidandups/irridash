function calculateRunoff() {
    let dripperIn = parseFloat(document.getElementById('dripperIn').value);
    let drainOut = parseFloat(document.getElementById('drainOut').value);

    if (isNaN(dripperIn) || isNaN(drainOut) || dripperIn === 0) {
        alert("Please enter valid numbers for both Dripper In and Drain Out.");
        return;
    }

    let runoffPercentage = (drainOut / dripperIn) * 100;
    let incrementalRunoff = ((drainOut - dripperIn) / dripperIn) * 100;

    // Update the results on the page
    document.getElementById('runoffPercentage').innerText = runoffPercentage.toFixed(2) + '%';
    document.getElementById('incrementalRunoff').innerText = incrementalRunoff.toFixed(2) + '%';

    // Simulating temperature and humidity values for demonstration
    let temperature = 25; // Example temperature
    let humidity = 60;    // Example humidity
    let tempDeficit = temperature - (humidity / 100) * temperature;

    document.getElementById('temperature').innerText = temperature;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('tempDeficit').innerText = tempDeficit.toFixed(2);
}
