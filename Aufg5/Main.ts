
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
        drawWiese(0, 150, "#00FF00", "#00FF00");
        drawHaus(100, 50, "#000000", "#000000");
        drawDach(100, 50, "#000000", "#000000");
        drawTuer(110, 100, "#5E3B24", "#5E3B24");
    }


    function drawWiese(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 400, _y + 0);
        crc2.lineTo(_x + 400, _y + 150);
        crc2.lineTo(_x + 0, _y + 150);
        crc2.lineTo(_x + 0, _y + 0);
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
}