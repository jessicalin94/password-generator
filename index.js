let characters = Array.from("`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?\\")

let pw1 = document.querySelector(".pw1")
let pw2 = document.querySelector(".pw2")
let pw3 = document.querySelector(".pw3")
let pw4 = document.querySelector(".pw4")

function generateRandomString() {
    let password = ""
    for (let i = 1; i <= 10; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function generatePasswords() {
    pw1.textContent = generateRandomString()
    pw2.textContent = generateRandomString()
    pw3.textContent = generateRandomString()
    pw4.textContent = generateRandomString()
}

