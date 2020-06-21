let Coin = 0
input.onGesture(Gesture.Shake, function () {
    Coin = randint(1, 2)
    if (Coin == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
})
