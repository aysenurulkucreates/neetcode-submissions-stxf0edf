class CountSquares {
    constructor() {
        this.pointsArray = [];
        this.pointsMap = {};
    }

    add(point) {
        const [x, y] = point;
        const key = `${x}, ${y}`;

        this.pointsArray.push(point);
        this.pointsMap[key] = (this.pointsMap[key] || 0) + 1;

    }

    count(point) {
        const [qx, qy] = point;
        let totalSquares = 0;

        for(let [x, y] of this.pointsArray) {
            if(Math.abs(x - qx) === Math.abs(y - qy) && x !== qx && y !== qy) {
                const corner1Key = `${x}, ${qy}`;
                const corner2Key = `${qx}, ${y}`;

                const corner1Count = this.pointsMap[corner1Key] || 0;
                const corner2Count = this.pointsMap[corner2Key] || 0;

                totalSquares += corner1Count * corner2Count;
            }
        }
        return totalSquares;
    }
}
