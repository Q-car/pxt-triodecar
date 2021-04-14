/** 
 * @file pxt-triodecar/main.ts
 * @brief BananaPi's triodecar makecode library.
 * @n This is a MakeCode graphical programming education robot.
 * 
 * @copyright    [BananPi](http://banana-pi.org), 2021
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](1445788683@qq.com)
 * @date  2021-03-23
*/
enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}


//% weight=0 color=#FF7256 icon="\uf1b9" block="TriodeCar"
namespace triodecar {

    export enum Patrol {
        //% blockId="patrolLeft" block="left"
        PatrolLeft = 2,
        //% blockId="patrolRight" block="right"
        PatrolRight = 1
    }


    export enum direction {
        //% blockId="foward" block="go foward"
        foward = 1,
        //% blockId="stop" block="stop"
        stop = 2,
        //% blockId="turnleft" block="turn left"
        left = 3,
        //% blockId="turnright" block="turn right"
        right = 4,
    }

    export enum motor {
        //% blockId="leftmotor" block="Left Motor"
        left = 1,
        //% blockId="rightmotor" block="Right Motor"
        right = 2,
    }


     /**
     * Read line tracking sensor.
     */

    //% weight=20
    //% blockId=read_Patrol block="read |%patrol line tracking sensor"
    //% patrol.fieldEditor="gridpicker" patrol.fieldOptions.columns=2 
    export function readPatrol(patrol: Patrol): number {
        if (patrol == Patrol.PatrolLeft) {
            return pins.analogReadPin(AnalogPin.P2)
        } else if (patrol == Patrol.PatrolRight) {
            return pins.analogReadPin(AnalogPin.P1)
        } else {
            return -1
        }
    }


   /**
    * CarDirection.
    */

   //% blockId=IR_Enable block="let the car |%direction"
   //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=4 
   //% weight=93 blockGap=8

    export function CarDirection(Direction: direction): void {
        if (Direction == direction.foward) {
            pins.servoSetPulse(AnalogPin.P14, 4000)    //left
            pins.servoSetPulse(AnalogPin.P15, 4000)    //right
        } 
        else if (Direction == direction.stop) {
            pins.digitalWritePin(DigitalPin.P14, 1)    //left
            pins.digitalWritePin(DigitalPin.P15, 1)    //right
       } 
        else if (Direction == direction.left) {
            pins.digitalWritePin(DigitalPin.P14, 1)    //left
            pins.servoSetPulse(AnalogPin.P15, 4000)    //right
       }  
       else if (Direction == direction.right) {
        pins.servoSetPulse(AnalogPin.P14, 4000)    //left
            pins.digitalWritePin(DigitalPin.P15, 1)    //right
       } 
   }


    /**
     * Set the speed of Triode-Car motor.
     */

    //% weight=90
    //% blockId=motor_MotorRun block="|%motor|move Foward at speed|%speed"
    //% speed.min=0 speed.max=10
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=2
    export function motorRun(Motor: motor, speed: number = 5): void {
        let pulsetime = Math.map(speed, 1, 10, 12000, 0)
        if (Motor == motor.left) {
            if (speed == 0) {
                 pins.digitalWritePin(DigitalPin.P14, 1)    //left
            } 
            else {
                pins.servoSetPulse(AnalogPin.P14, pulsetime)
            } 
        } 
        if (Motor == motor.right) {
            if (speed == 0) {
                 pins.digitalWritePin(DigitalPin.P15, 1)    //right
            } 
            else {
                pins.servoSetPulse(AnalogPin.P15, pulsetime)
            } 
        } 
    }


    /**
     * Read ultrasonic sensor.
     */

    //% blockId=ultrasonic_sensor block="read ultrasonic sensor |%unit "
    //% weight=95 advanced=true

    export function UltrasonicSensor(unit: PingUnit, maxCmDistance = 500): number {
        let d
        pins.digitalWritePin(DigitalPin.P12, 1);
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P12, 0);
        if (pins.digitalReadPin(DigitalPin.P13) == 0) {
            pins.digitalWritePin(DigitalPin.P12, 0);
            //sleep_us(2);
            pins.digitalWritePin(DigitalPin.P12, 1);
            //sleep_us(10);
            pins.digitalWritePin(DigitalPin.P12, 0);
            d = pins.pulseIn(DigitalPin.P13, PulseValue.High, maxCmDistance * 58);//readPulseIn(1);
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.digitalWritePin(DigitalPin.P12, 1);
            d = pins.pulseIn(DigitalPin.P13, PulseValue.Low, maxCmDistance * 58);//readPulseIn(0);
        }
        let x = d / 39;
        if (x <= 0 || x > 500) {
            return 0;
        }
        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }

    }
}
