var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufg8_Main;
(function (Aufg8_Main) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y, _color, _hungry, _flowers) {
            _super.call(this, _x, _y, _color);
            this.hungry = _hungry;
            this.flowers = _flowers;
            this.pausecounter = 0;
            this.FlowerSelect();
            this.statusVoll = "Leer";
        }
        HoneyBee.prototype.update = function () {
            this.draw();
            this.moveToFlower();
        };
        HoneyBee.prototype.FlowerSelect = function () {
            this.hungry = true;
            var i = Math.floor(Math.random() * (this.flowers.length - 1));
            this.flowerx = this.flowers[i].x;
            this.flowery = this.flowers[i].y;
            // this.flower = this.flowers[Math.floor(Math.random() * 100)];
        };
        HoneyBee.prototype.moveToFlower = function () {
            if (this.status != "pause") {
                this.pausecounter = 0;
                this.x += Math.floor(Math.random() * -1);
                this.y += (this.flowery - this.y) * 0.05;
                if (this.x < 0)
                    this.x = 400;
                if (this.x > 400)
                    this.x = 0;
                if (this.y < 0)
                    this.y = 400;
                if (this.y > 400)
                    this.y = 0;
                if ((Math.abs(this.flowerx - this.x) < 1) && (Math.abs(this.flowery - this.y) < 20)) {
                    this.status = "pause";
                }
                else {
                    this.y += Math.floor(Math.random() * 4) - 2;
                }
            }
            else {
                switch (this.statusVoll) {
                    case "Leer":
                        this.pausecounter += 1;
                        console.log("Sie Saugen gerade und sind zu " + this.pausecounter + "% voll");
                        if (this.pausecounter > 99) {
                            this.status = "Nest";
                            console.log("Die Biene will ins " + this.status);
                            this.pausecounter = 0;
                            this.flowerx = 160;
                            this.flowery = 60;
                            this.statusVoll = "Voll";
                            console.log("Die Biene ist " + this.statusVoll);
                        }
                        break;
                    case "Voll":
                        this.pausecounter += 1;
                        console.log("Sie Kotzen gerade und sind zu " + this.pausecounter + "% fertig");
                        if (this.pausecounter > 99) {
                            this.status = "SIE FLIEGEN";
                            this.pausecounter = 0;
                            this.FlowerSelect();
                            this.statusVoll = "Leer";
                        }
                        console.log("Die Biene ist jetzt " + this.statusVoll + " und sucht eine Neue Blume!");
                        break;
                }
            }
        };
        return HoneyBee;
    }(Aufg8_Main.bee));
    Aufg8_Main.HoneyBee = HoneyBee;
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Honigbiene.js.map