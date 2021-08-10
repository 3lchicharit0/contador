let segundos = 0
basic.forever(function () {
    basic.pause(100)
    segundos += 1
    if (segundos == 59) {
        segundos = 0
        segundos += 1
    }
})
