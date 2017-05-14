namespace hive_Classes {


    export class flowerSettings {
        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;

        }
        randomFlowerPos(): void {
            let x: number = Math.floor((Math.random() * 400) + 0);
            let y: number = Math.floor((Math.random() * 145) + 155);
            this.drawFlower();
        }


        drawFlower(): void {
            crc2.beginPath();

            let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 255) + ")";


            crc2.fillStyle = color;
            crc2.strokeStyle = color;
            crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";
            crc2.ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

        }

    }

}