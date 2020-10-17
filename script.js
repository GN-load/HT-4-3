const input = document.querySelector('.txt');
const span = document.querySelector('.JStxt');

if(input.value == '') {
    span.textContent = 'хто я';
}
input.addEventListener('input', () => {
     if(input.value.length > 0) {
        span.textContent = input.value;
    }
})



