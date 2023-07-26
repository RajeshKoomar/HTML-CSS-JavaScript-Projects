

let counter = 0;
  
const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
  
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
  
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
  
// To reset the value of counter
resetBtn.addEventListener('click', () => {
       counter = 0;
    counterValue.innerHTML = counter;
  });



