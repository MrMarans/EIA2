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
    }
}