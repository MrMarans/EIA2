
namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Hallo");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawHimmel(0, 0, 0, "#BCEDDD", "#9CEDEC");
        
        
        
        for (let j:number = 0; j < 20; j++){
        let x:number = Math.floor((Math.random()*400)-100);
        let y:number = Math.floor((Math.random()*150)+0);  
         let a:number = Math.floor((Math.random()*25)+17);  
        let b:number = Math.floor((Math.random()*25)+15 );      
         drawWolke(x,y,a,b);    
        }
        
        
        drawBerg(200,150);
        drawBergspitze(261,19);
        drawBerg(320,150);
        drawBergspitze(381,19);
        drawWiese2(0, 0, 180, "#98F2B7", "#98F2B7");
        drawWiese(0, 0, 90, "#45F273", "#45F273");
        drawWiesenschraege(0, 150, "#00F500", "#00F500");
        drawHaus(50, 50, "#8F6552", "#8F6552");
        drawDach(50, 50, "#705040", "#705040");
        drawTuer(110, 100, "#5E3B24", "#5E3B24");
        drawFenster(150, 50, "#F0F0F0", "#F0F0F0");
        
         for(let i: number = 0; i < 100; i++){
         let x: number = Math.floor((Math.random()*400)+0);
         let y:number = Math.floor((Math.random()*145)+155);
         drawBlume(x,y);        
         }
    }


    function drawHimmel(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWolke(_x: number, _y: number,  _a:number, _b:number): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF"; 
        crc2.strokeStyle = "#FFFFFF";
        crc2.ellipse(_x + 100, _y + 0, _a+0, _b+0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 100, _y + 0, _b+0, _a+0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawBerg(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#BBBBBB"; 
        crc2.strokeStyle = "#BBBBBB";
        crc2.lineTo(_x+70,_y-150);
        crc2.lineTo(_x+140, _y+0);
        crc2.lineTo(_x+0,_y+0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBergspitze(_x:number, _y:number):void{
        crc2.beginPath();
        crc2.fillStyle ="#EEEEEE";
        crc2.strokeStyle = "#DDDDDD";
        crc2.lineTo(_x+9.3 ,_y-20);
        crc2.lineTo(_x+(9.3*2), _y-0);
        crc2.lineTo(_x+0, _y+0);
         crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
    }
        
        
    function drawWiese(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        //        crc2.lineTo(_x + 400, _y + 0);
        //        crc2.lineTo(_x + 400, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 0);
        crc2.ellipse(_x + 100, _y + 345, 200, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiese2(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWiesenschraege(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 400, _y + 150);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawHaus(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 200, _y + 0);
        crc2.lineTo(_x + 200, _y + 100);
        crc2.lineTo(_x + 0, _y + 100);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawDach(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 200, _y + 0);
        crc2.lineTo(_x + 100, _y - 50);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTuer(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 25, _y + 0);
        crc2.lineTo(_x + 25, _y + 50);
        crc2.lineTo(_x + 0, _y + 50);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFenster(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 25, _y + 0);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.lineTo(_x + 0, _y + 25);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    function drawBlume(_x: number, _y: number): void {
        crc2.beginPath();
  
        var color = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
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