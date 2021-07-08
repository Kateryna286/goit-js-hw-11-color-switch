const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    btnStart: document.querySelector("button[data-action='start']"),
    btnStop: document.querySelector("button[data-action='stop']"),
    body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick () {
  timerId = setInterval(() => {
    toChangeBgColor();
  }, 1000);
    console.log('Start');
};

function onStopClick () {
    clearInterval(timerId);
    refs.btnStart.removeAttribute('disabled');
    console.log('Stop');
};

function toChangeBgColor() {
    refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length)]}`;
    refs.btnStart.setAttribute('disabled', true);
    console.log('changing colors');
};





 


