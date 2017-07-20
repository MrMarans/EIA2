namespace Abschluss {


    export class confetti {
        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }


        update(): void {
            this.drawConfetti();
            this.move();
        }

        move() {
            this.y += 1;

        }

        drawConfetti(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.strokeStyle = "#00FF00";
            crc2.moveTo(this.x + 1, this.y);
            crc2.moveTo(this.x + 1, this.y + 1);
            crc2.moveTo(this.x, this.y + 1);
            crc2.moveTo(this.x, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            console.log("drawed")
        }
    }
}