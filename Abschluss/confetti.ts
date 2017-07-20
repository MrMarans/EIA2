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
            
            console.log("TestUpdate");
            this.drawConfetti();
            this.move();
        }

        move() {
            this.x += Math.floor(Math.random() * 1);
            this.y += Math.floor(Math.random() * 1);
            
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