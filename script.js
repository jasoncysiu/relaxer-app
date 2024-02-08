const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 19000;
const breatheTime = 4000;
const holdTime = 7000;

// Vibration pattern (example: vibrate at the start of each step)
const vibratePattern = [200]; // Vibrate for 200 milliseconds

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  // Trigger vibration for "Breathe In"
  if (navigator.vibrate) {
    navigator.vibrate(vibratePattern);
  }

  setTimeout(() => {
    text.innerText = 'Hold';
    // Trigger vibration for "Hold"
    if (navigator.vibrate) {
      navigator.vibrate(vibratePattern);
    }

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
      // Trigger vibration for "Breathe Out"
      if (navigator.vibrate) {
        navigator.vibrate(vibratePattern);
      }
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
