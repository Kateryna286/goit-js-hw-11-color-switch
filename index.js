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

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onStartClick = () => {
  timerId = setInterval(() => {
    changeBgColor();
  }, 1000);
};

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);


function onStopClick () {
    clearInterval(timerId);
    refs.btnStart.removeAttribute('disabled');
};

function changeBgColor() {
    refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length)]}`;
    refs.btnStart.setAttribute('disabled', true);
};





 


