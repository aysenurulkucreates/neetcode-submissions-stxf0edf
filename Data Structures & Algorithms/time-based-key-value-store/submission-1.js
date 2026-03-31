class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if(!this.map.has(key)){
            this.map.set(key, []);
        }

        this.map.get(key).push({value: value, timestamp: timestamp })
    }

    get(key, timestamp) {
        if(!this.map.has(key)) {
            return '';
        }
        
        let values = this.map.get(key);

        let left = 0;
        let right = values.length - 1;

        let res = '';

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            let currentTime = values[mid].timestamp;
            let currentVal = values[mid].value;

            if(currentTime === timestamp) {
                return currentVal;
            } else if(currentTime > timestamp) {
                right = mid - 1;
            } else {
                res = currentVal;
                left = mid + 1;
            }

        } 

        return res;
    
    }
}
