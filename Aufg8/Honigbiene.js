var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufg8_Main;
(function (Aufg8_Main) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y, _leftpush, _rightpush, _color, _hungry, _flowers) {
            _super.call(this, _x, _y, _leftpush, _rightpush, _color);
            this.hungry = _hungry;
            this.flowers = _flowers;
            this.pausecounter = 0;
        }
        HoneyBee.prototype.HoneybeeUpdate = function () {
            this.draw();
            this.FlowerSelect();
            this.moveToFlower();
        };
        HoneyBee.prototype.FlowerSelect = function () {
            this.hungry = true;
            //  let i: number = Math.floor(Math.random() * (flowerSettings.length - 1));
            //  this.flowerx = flowerSettings[i].x;
            //  this.flowery = flowerSettings[i].y;
            this.flower = this.flowers[Math.floor(Math.random() * 100)];
        };
        HoneyBee.prototype.moveToFlower = function () {
            if (this.hungry == true) {
                this.x += Math.floor(Math.random() * 8) - 4;
                this.y += (this.flowery - this.y) * 0.05;
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
        };
        return HoneyBee;
    }(Aufg8_Main.bee));
    Aufg8_Main.HoneyBee = HoneyBee;
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Honigbiene.js.map