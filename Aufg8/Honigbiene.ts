namespace Aufg8_Main {



    export class HoneyBee extends bee {
        hungry: boolean;
        status:string;
        flowers: flowerSettings[];
        flower: flowerSettings;
        pausecounter : number;
        flowerx : number;
        flowery:number;
        constructor(_x: number, _y: number, _color: string, _hungry: boolean, _flowers: flowerSettings[]) {
            super(_x, _y, _color);
            this.hungry = _hungry;
            this.flowers = _flowers;
            this.pausecounter = 0;  
            this.FlowerSelect();
        }
            update(): void {
            this.draw();
            this.moveToFlower();
        }
        FlowerSelect(): void {
            this.hungry=true;
        let i: number = Math.floor(Math.random() * (this.flowers.length - 1));
            this.flowerx = this.flowers[i].x;
            this.flowery = this.flowers[i].y;
           // this.flower = this.flowers[Math.floor(Math.random() * 100)];
        }
        moveToFlower():void{
            
            if(this.status!="pause") {
                this.pausecounter=0;
                
                this.x += Math.floor(Math.random() * -1);
                this.y += (this.flowery - this.y)*0.05;
                
                if (this.x < 0) this.x = 400; 

                if (this.x > 400) this.x = 0;

                if (this.y < 0) this.y = 400;

                if (this.y > 400) this.y = 0;
                
                
                
                 if ((Math.abs(this.flowerx - this.x) < 4) && (Math.abs(this.flowery - this.y) < 4)) {
                            this.status = "pause";
                            this.FlowerSelect();
                 }
                 else {
                      
                         this.y  += Math.floor(Math.random() * 4)-2;
                                            
                 }
            }
            else{
            this.pausecounter+=1;
                console.log("Sie Saugen gerade und sind zu " + this.pausecounter + "% voll");
                if(this.pausecounter>99)
                {this.status="SIE FLIEGEN"}    
            }
       }
      }
}