input.onButtonPressed(Button.A, function () {
    T += 1
})
input.onButtonPressed(Button.AB, function () {
    if (B > T) {
        basic.showString("Biden Wins!")
    } else if (T > B) {
        basic.showString("Trump Wins!")
    } else {
        basic.showString("It's A Tie")
    }
})
input.onButtonPressed(Button.B, function () {
    B += 1
})
input.onGesture(Gesture.Shake, function () {
    T = 0
    B = 0
})
let B = 0
let T = 0
T = 0
B = 0
basic.showString("Trump")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.clearScreen()
basic.pause(1000)
basic.showString("Biden")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(1000)
basic.clearScreen()
