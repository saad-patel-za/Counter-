let saveEl = document.getElementById("save-el")
let CountLg = document.getElementById("count-lg")
let count = 0

function increment() {
    count += 1
    CountLg.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    CountLg.textContent = 0
    count = 0
}