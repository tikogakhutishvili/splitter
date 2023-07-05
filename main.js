const typefee = document.getElementById("typefee")
const fiveperc = document.getElementById("five")
const tenperc = document.getElementById("ten")
const fifteenperc = document.getElementById("fifteen")
const twentyfiveperc = document.getElementById("twentyfive")
const fiftyperc = document.getElementById("fifty")
const typeperc = document.getElementById("typeperc")
const peoplenum = document.getElementById("peoplenum")
const oneperson = document.getElementById("oneperson")
const total = document.getElementById("total")
const reset = document.getElementById("reset")
const required = document.querySelector("#required")
const money = []
const num = []
const percent = []

fiveperc.addEventListener('click', () => {
    money.push(typefee.value)
    num.push(peoplenum.value)
    five()
})

function five() {

    oneperson.innerHTML = money.map(el => `<h2>$${el*0.05}</h2>`),
    total.innerHTML = money.map(el => `<h2>$${el*0.05*num}</h2>`)
    
}


tenperc.addEventListener('click', () => {
    money.push(typefee.value)
    num.push(peoplenum.value)
    ten()
})
function ten() {
    oneperson.innerHTML = money.map(el => `<h2>$${el*0.10}</h2>`)
    total.innerHTML = money.map(el => `<h2>$${el*0.10*num}</h2>`)
}

fifteenperc.addEventListener('click', () => {
    money.push(typefee.value)
    num.push(peoplenum.value)
    fifteen()
})
function fifteen() {
    oneperson.innerHTML = money.map(el => `<h2>$${el*0.15}</h2>`)
    total.innerHTML = money.map(el => `<h2>$${el*0.15*num}</h2>`)
}


twentyfiveperc.addEventListener('click', () => {
    money.push(typefee.value)
    num.push(peoplenum.value)
    twentyfive()
})
function twentyfivefive() {
    oneperson.innerHTML = money.map(el => `<h2>$${el*0.25}</h2>`)
    total.innerHTML = money.map(el => `<h2>$${el*0.25*num}</h2>`)
}
fiftyperc.addEventListener('click', () => {
    money.push(typefee.value)
    num.push(peoplenum.value)
    fifty()
})
function fifty() {
    oneperson.innerHTML = money.map(el => `<h2>$${el*0.5}</h2>`)
    total.innerHTML = money.map(el => `<h2>$${el*0.5*num}</h2>`)
}
addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {

        money.push(typefee.value)
        num.push(peoplenum.value)
        percent.push(typeperc.value/100)
        Result()
    }
})
function Result() {
    oneperson.innerHTML = money.map(el => `<h2>$${el*percent*num}</h2>`)
    total.innerHTML = money.map(el => `<h2>$${el*percent*num}</h2>`)
}
reset.addEventListener("click", () =>{
    location.reload()
} )

