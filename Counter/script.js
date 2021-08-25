
let count = 0;
const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btn.forEach((item) => {
    item.addEventListener('click', (event) => {
        const classes = event.currentTarget.classList
        if (classes.contains('btn-dec')) {
            count--
        } else if (classes.contains('btn-inc')) {
            count++
        } else {
            count  = 0
        }

        if (count > 0) {
            value.style.color = 'green';
        } else if (0 > count) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black'
        }

        value.textContent = count
    })
})