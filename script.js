document.addEventListener("DOMContentLoaded", () => {
    const foggerToggle = document.getElementById("foggerToggle");
    const foggerStatus = document.getElementById("foggerStatus");
    const dustLevel = document.getElementById("dustLevel");
    const runtime = document.getElementById("runtime");

    let isFoggerOn = false;
    let totalRuntime = 0;

    foggerToggle.addEventListener("change", () => {
        isFoggerOn = foggerToggle.checked;
        foggerStatus.textContent = isFoggerOn ? "ON" : "OFF";

        // Code to send the toggle status to the backend server to control the fogger
        // For example: axios.post('/toggle-fogger', { status: isFoggerOn });
    });

    // Function to simulate getting dust sensor readings
    function getDustSensorReading() {
        // Simulated dust level value (replace with actual sensor reading)
        return Math.floor(Math.random() * 1000);
    }

    // Function to update the dust sensor reading and runtime
    function updateReadings() {
        const dustValue = getDustSensorReading();
        dustLevel.textContent = dustValue;

        if (isFoggerOn) {
            totalRuntime++;
            runtime.textContent = totalRuntime;
        }
    }

    // Update readings every second
    setInterval(updateReadings, 1000);
});
