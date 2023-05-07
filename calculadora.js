function addToDisplay(value) {
    document.querySelector('.display').value += value;
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}

function backspace() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}
