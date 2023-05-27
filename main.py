def on_button_pressed_a():
    xgo.move_xgo(xgo.direction_enum.FORWARD, 92)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.TWIRL_YAW)
    basic.pause(1000)
    xgo.execution_action(xgo.action_enum.STAND)
    basic.pause(2000)
input.on_button_pressed(Button.A, on_button_pressed_a)

xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
