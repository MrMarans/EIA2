namespace Aufg8_Main {



    export class HoneyBee extends bee {
        hungry: boolean;
        constructor(_x: number, _y: number, _leftpush: number, _rightpush: number, _color: string, _hungry: boolean) {
            super(_x, _y, _leftpush, _rightpush, _color);
            this.hungry = _hungry
        }
        HoneybeeUpdate(): void {
            this.draw();
            this.update();
        }
        Flowermove(): void {
            if (this.hungry = true) {
                flowerSettings[Math.random() * 100] = y;
            }
        }


    }
}