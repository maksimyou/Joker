let isLoad = true;
let jokes;
fetch('./chuck-jokes-ru.json')
    .then(data => data.json())
    .then(text => {
        jokes = text.value;
        start();
    })

const btn = document.querySelector('.btn-joke')
const img = document.querySelector('.img-joker')
const text = document.querySelector('.joke-text')
const mainContainer = document.querySelector('.main_container')


randomJoke = () => {
    return Math.floor(0 + Math.random() * (573 - 0));
}

randomImg = () => {
    return Math.floor(1 + Math.random() * (8 - 1));
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const start = () => {
    img.src = `./img/${randomImg()}.jpg`
    text.textContent = jokes[randomJoke()].joke

    mainContainer.style.background = getRandomColor();
}


btn.addEventListener('click', () => {
    start()
})
