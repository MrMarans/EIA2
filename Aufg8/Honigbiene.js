var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufg8_Main;
(function (Aufg8_Main) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y, _leftpush, _rightpush, _color, _hungry) {
            _super.call(this, _x, _y, _leftpush, _rightpush, _color);
            this.hungry = _hungry;
        }
        HoneyBee.prototype.HoneybeeUpdate = function () {
            this.draw();
            this.update();
        };
        HoneyBee.prototype.Flowermove = function () {
            if (this.hungry = true) {
                Aufg8_Main.flowerSettings[Math.random() * 100] = y;
            }
        };
        return HoneyBee;
    }(Aufg8_Main.bee));
    Aufg8_Main.HoneyBee = HoneyBee;
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Honigbiene.js.map