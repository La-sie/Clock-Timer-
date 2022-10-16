let seconds = 00;
let tens = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let startBtn = document.querySelector('.start-btn');
let stopBtn = document.querySelector('.stop-btn');
let resetBtn = document.querySelector('.reset-btn');



startBtn.addEventListener('click', () =>{
  interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', () =>{
  clearInterval(interval);
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})

function startTimer() {
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML =  tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
}

