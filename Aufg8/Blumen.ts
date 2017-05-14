namespace L4_Classes {



    export class flower {
        x: number;
        y: number;
        type: string;

    }

    constructor(_x: number, _y: number, _type: string) {
        this.x = _x;
        this.y = _y;
        this.type = _type;
    }

    FlowerRandomPlace():void {
        let this.x: number = Math.floor((Math.random() * 400) + 0);
        let this.y: number = Math.floor((Math.random() * 145) + 155);
        drawBlume(this.x, this.y);
    }


    drawFlower():void {
        crc2.beginPath();

        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")";


        crc2.fillStyle = color;
        crc2.strokeStyle = color;
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.ellipse(_x + 0, _y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        
        
    }




}