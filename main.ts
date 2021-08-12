let HORA = 0
let minutos = 0
let segundos = 0
basic.forever(function () {
    segundos += 1
    if (segundos == 59) {
        segundos = 0
        minutos += 1
    }
    if (minutos == 59) {
        minutos = 0
        HORA += 1
    }
    if (HORA == 1) {
        HORA = 0
        HORA += 12
    }
})
