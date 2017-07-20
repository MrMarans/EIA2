namespace Abschluss {


    export class confetti {
        x: number = 5;
        y: number = Math.random()* (893 - 0) + 0;
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
            this.x += Math.floor(Math.random() * 11) - 5;
            this.y += Math.floor(Math.random() * 11) - 6;
            if (this.y > 893)
                this.color = "rgba(0, 0, 0, 0)"
        }

        drawConfetti(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.moveTo(this.x + 10, this.y + 10);
            crc2.moveTo(this.x, this.y + 10);
            crc2.moveTo(this.x, this.y);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.stroke();
        }
    }
}