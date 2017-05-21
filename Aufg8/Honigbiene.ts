namespace Aufg8_Main {



    export class HoneyBee extends bee {
        hungry: boolean;
        status:string;
        flowers: flowerSettings[];
        flower: flowerSettings;
        pausecounter : number;
        flowerx : number;
        flowery:number;
        constructor(_x: number, _y: number, _leftpush: number, _rightpush: number, _color: string, _hungry: boolean, _flowers: flowerSettings[]) {
            super(_x, _y, _leftpush, _rightpush, _color);
            this.hungry = _hungry;
            this.flowers = _flowers;
            this.pausecounter = 0;  

        }
            update(): void {
            this.draw();
            this.FlowerSelect();
            this.moveToFlower();
        }
        FlowerSelect(): void {
            this.hungry==true;
        let i: number = Math.floor(Math.random() * (flowerSettings.length - 1));
            this.flowerx = flowerSettings[i].x;
            this.flowery = flowerSettings[i].y;
           // this.flower = this.flowers[Math.floor(Math.random() * 100)];
        }
        moveToFlower():void{
            
            if(this.hungry=true)
            {
                this.x += Math.floor(Math.random() * 1);
                this.y += (this.flowery - this.y)*0.05;
                
                 if (this.x < 0)
                this.x = 400;

            if (this.x > 400)
                this.x = 0;

            if (this.y < 0)
                this.y = 400;

            if (this.y > 400)
                this.y = 0;
                
                
                
         if ((this.flowerx - this.x < 12 && this.flowerx - this.x > -12) && (this.flowery - this.y < 12 && this.flowery - this.y > -12)) {
                    this.status = "pause";
         }
         else {
              this.pausecounter += 1;     
         }
            }
        }
        
        

    }
}