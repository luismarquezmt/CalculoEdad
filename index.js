let spanAnswer = document.getElementById("espan-answer")

function calculateAge() {
    let birthDate = new Date(document.getElementById("input-date-Birth").value)
    let actualDate = new Date()
    let answer = (actualDate.getTime() - birthDate.getTime()) / 31540000000
    answer = answer.toFixed(2)
    if (answer > 0 && answer < 1)
        spanAnswer.innerHTML = "debes ser mayor de 1 año para usar este programa"
    else if (answer < 0)
        spanAnswer.innerHTML = "debe ser una fecha anterior a la actual"
    else if (birthDate == "Invalid Date")
        spanAnswer.innerHTML = "Debes seleccionar una fecha"
    else
        spanAnswer.innerHTML = `La cantidad de años desde ${birthDate.getFullYear()} es ${answer}`
}

function isLeapYear() {
    let createdElementP
    let message
    let leapYear = document.getElementById("input-date-leap").value
    leapYear = Number(leapYear)
    if (leapYear < 1800 || leapYear > 9999) {
        window.location.reload()
    } else if ((leapYear % 4 === 0 && leapYear % 100 > 0) || leapYear % 100 === 0 && leapYear % 400 === 0) {
        message = `${leapYear} es un año bisiesto`
    } else
        message = `${leapYear} no es un año bisiesto`

    createdElementP = document.createElement("p")
    createdElementP.appendChild(document.createTextNode(message))
    document.getElementById("espan-answer-leap").appendChild(createdElementP)
}
/* 
Todos los años bisiestos son divisibles entre 4.
Aquellos años que son divisibles entre 4, pero no entre 100, son bisiestos.
Los años que son divisibles entre 100, pero no entre 400, no son bisiestos.
Sin embargo, los años divisibles entre 100 y entre 400 sí que son bisiestos. */