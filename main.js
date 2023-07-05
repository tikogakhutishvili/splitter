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
const inps = document.querySelectorAll("input")
const calc = document.querySelector("#calc")

typeperc.addEventListener('click', () => {
    typeperc.classList.add("brdr")
})

calc.addEventListener("click", () => {
    if(peoplenum.value === "") {
        peoplenum.style.border = "2px solid #E17052"
        required.classList.replace("hide","show")
    } else {
        return result (typeperc.value),
        peoplenum.style.border = "none",
        required.classList.replace("show","hide")
    }
})


function result(e) {
    let tip = (((typefee.value*e)/100) / peoplenum.value)
    oneperson.innerHTML = "$" + Number.parseFloat(tip).toFixed(2),
    total.innerHTML = "$" + Number.parseFloat(typefee.value / peoplenum.value + tip).toFixed(2)   
}

fiveperc.addEventListener('click', () => {
    typeperc.value = 5
})
tenperc.addEventListener('click', () => {
    typeperc.value = 10
})
fifteenperc.addEventListener('click', () => {
    typeperc.value = 15
})
twentyfiveperc.addEventListener('click', () => {
    typeperc.value = 25
})
fiftyperc.addEventListener('click', () => {
    typeperc.value = 50
})



reset.addEventListener("click", () =>{
    oneperson.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
    typefee.value = ""
    typeperc.value= ""
    peoplenum.value= ""
} )

