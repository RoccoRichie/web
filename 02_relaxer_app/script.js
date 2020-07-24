const container = document.querySelector('.container');
const text = document.querySelector('#text');

// Animation time - full rotation - 7.5 seconds (7500 miliseconds)
// Breath in 3 seconds, Hold 1.5 seconds and breath out 3 seconds
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Call immediatley
breatheAnimation();

function breatheAnimation() {
  // First time we want to breathe in
  text.innerText = 'Breathe In!';
  // When breathing in we will add a css class of grow (which will make the container transofrm to be larger and shrink class when breathing out)
  container.className = 'container grow';

  // Set a timeout to wait before the next action (i.e. Grow for 3 seconds and then do something else)
  setTimeout(() => {
    text.innerText = 'Hold';
    // Need another timeout to hold for 2 seconds
    setTimeout(() => {
      text.innerText = ' breathe out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// We want to run this every 7.5 seconds... The first call above the function is the first call and then
// this intervall will then execute it continuously every 7.5 seconds
setInterval(breatheAnimation, totalTime);
