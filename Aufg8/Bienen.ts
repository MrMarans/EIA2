/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/


namespace Aufg8_Main{



    export class bee {
        x: number;
        y: number;
        leftpush: number;
        rightpush: number;
        color: string;
        gelehmt: boolean;



        constructor(_x: number, _y: number, _color:string) {
            this.x = _x;
            this.y = _y;
            this.leftpush = 0;
            this.rightpush = 0;
            this.color = _color;
        }

        update():void{
         
        this.draw();
        this.move();    
        }
        
        draw():void{
             crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.lineTo(this.x - 1, this.y + 0);
        crc2.lineTo(this.x - 1, this.y + 1);
        crc2.lineTo(this.x + 0, this.y + 1);
        crc2.lineTo(this.x + 0, this.y - 2);
        crc2.lineTo(this.x - 1, this.y - 2);
        crc2.lineTo(this.x - 1, this.y - 1);
        crc2.lineTo(this.x - 2, this.y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.lineTo(this.x + 4, this.y + 0);
        crc2.lineTo(this.x + 4, this.y - 1);
        crc2.lineTo(this.x + 5, this.y - 1);
        crc2.lineTo(this.x + 5, this.y - 2);
        crc2.lineTo(this.x + 4, this.y - 2);
        crc2.lineTo(this.x + 4, this.y - 3);
        crc2.lineTo(this.x + 0, this.y - 3);
        crc2.lineTo(this.x + 0, this.y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        }
        

        move(): void {
            
            if (this.leftpush % 20 == 1) {
                this.x -= 5;
                this.rightpush++
                if (this.leftpush % 100 == 1) {
                    this.gelehmt = true;
                    
                }
                else { }
            }

            else { }

            if (this.rightpush % 5 == 1)
            { this.x += 10 }
            else {
                this.x += Math.floor(Math.random() * 11) - 6;
                this.y += Math.floor(Math.random() * 11) - 5;
                this.leftpush++
            }
            

            if (this.x < 0)
                this.x = 400;

            if (this.x > 400)
                this.x = 0;

            if (this.y < 0)
                this.y = 400;

            if (this.y > 400)
                this.y = 0;

        }
        
        
        
    }
}