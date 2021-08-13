let segundos = 0
let minutos = 58
let HORA = 0
basic.forever(function () {
    segundos += 1
    if (segundos == 59) {
        minutos += 1
    }
    if (minutos == 59) {
        HORA += 1
    }
    if (HORA == 12) {
        HORA += 1
    }
})
