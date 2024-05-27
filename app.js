const button = document.querySelector('button')
console.log(button,'button')
let value = 1;
button.innerHTML = value

button.onclick = () => {
    value++
    button.innerHTML = value
}


button.onclick = () => {
    placeorder(value)
}