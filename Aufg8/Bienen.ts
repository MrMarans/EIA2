namespace L4_Classes {



    export class bee {
        x: number;
        y: number;
        leftpush: number;
        rightpush: number;
        color: string;
        gelehmt: boolean;



        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }



        overflow(): void {

            if (this.x < 0)
                this.x = 400;

            if (this.x > 400)
                this.x = 0;

            if (this.y < 0)
                this.y = 400;

            if (this.y > 400)
                this.y = 0;

        }
        
      Bienencolor():void{
          for (let i: number = 0; i < n; i++) {
            let b: bee = new bee(150, 60);
            bees[i] = b;
            this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 0) + ")";    
          }  
      }
        
        
       Bienenanimation():void{
        for (let i: number = 0; i <n; i++) {
            let b: bee = bees[i];

            if (this.leftpush % 20 == 1) {
                this.x -= 5;
                this.rightpush++
                if (this.leftpush % 100 == 1) {
                    this.gelehmt = true;
                    console.log("gelehmt")
                }
                else { }
            }

            else { }

            if (this.rightpush % 5 == 1)
            { b.x += 10 }
            else {
                this.x += Math.floor(Math.random() * 11) - 6;
                this.y += Math.floor(Math.random() * 11) - 5;
               this.leftpush++
            }
         }
        }
        
        drawBieneBienenTS(): void{
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
        
        
    }
}