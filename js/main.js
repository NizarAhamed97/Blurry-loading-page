let loadingText = document.querySelector('#loading_text')
let bgImage = document.querySelector('.bg')

let load = 0;
let interval = setInterval(loading, 30)

function loading() {
    load++;
    if (load > 99) {
        clearInterval(interval)
    }
    loadingText.textContent = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}