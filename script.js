const container = document.getElementById('container');
const text = document.getElementById('text');
const cycleCounter = document.getElementById('cycleCounter'); // Get the cycle counter element

const totalTime = 19000; // Total time for one breathing cycle
const breatheTime = 4000; // Time for 'Breathe In'
const holdTime = 7000; // Time for 'Hold'

function breathAnimation() {
  // Check if the counter is greater than 0 to continue the animation
  if (parseInt(cycleCounter.innerText) > 0) {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
      text.innerText = 'Hold';

      setTimeout(() => {
        text.innerText = 'Breathe Out!';
        container.className = 'container shrink';

        // Wait for the 'Breathe Out' phase to finish before decrementing the counter
        setTimeout(() => {
          // Decrement the counter after a full cycle and update the display
          cycleCounter.innerText = parseInt(cycleCounter.innerText) - 1;
        }, breatheTime); // Use breatheTime for the duration of 'Breathe Out'
      }, holdTime + 4000);
    }, breatheTime);
  } else {
    // Optional: Display a message or reset the app when the counter reaches 0
    text.innerText = 'Session Complete';
    // Reset the counter or disable further animations as needed
  }
}

setInterval(breathAnimation, totalTime);

// Start the animation
breathAnimation();
