input.onButtonPressed(Button.A, function () {
    xgo.move_xgo(xgo.direction_enum.Forward, 92)
    basic.pause(5000)
    xgo.rotate(xgo.rotate_enum.Left, 92)
    basic.pause(100)
    xgo.move_xgo(xgo.direction_enum.Forward, 92)
    basic.pause(100)
    xgo.execution_action(xgo.action_enum.Stand)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    xgo.execution_action(xgo.action_enum.Twirl_Pitch)
    basic.pause(100)
    xgo.body_height(100)
})
input.onGesture(Gesture.Shake, function () {
	
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
