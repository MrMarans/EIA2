var L4_Classes;
(function (L4_Classes) {
    var bee = (function () {
        function bee(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        bee.prototype.overflow = function () {
            if (this.x < 0)
                this.x = 400;
            if (this.x > 400)
                this.x = 0;
            if (this.y < 0)
                this.y = 400;
            if (this.y > 400)
                this.y = 0;
        };
        return bee;
    }());
    L4_Classes.bee = bee;
})(L4_Classes || (L4_Classes = {}));
//# sourceMappingURL=Bienen.js.map