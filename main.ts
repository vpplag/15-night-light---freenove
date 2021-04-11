basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 400) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    serial.writeNumber(pins.analogReadPin(AnalogPin.P1))
})
