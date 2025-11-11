input.onButtonPressed(Button.A, function () {
    FIJAR += 1
    basic.showNumber(NUMERO)
})
input.onButtonPressed(Button.B, function () {
    FIJAR += -1
    basic.showNumber(NUMERO)
})
let NUMERO = 0
basic.showNumber(0)
let FIJAR = 0
basic.forever(function () {
	
})
