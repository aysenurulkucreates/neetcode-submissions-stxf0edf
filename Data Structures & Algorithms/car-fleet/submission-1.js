class Solution {
    carFleet(target, position, speed) {
        let cars = [];
        
        for (let i = 0; i < position.length; i++) {
            cars.push({
                position: position[i],
                speed: speed[i],
            })
        }

         cars.sort((a,b) => b.position - a.position);

        let stack = [];

        for (let i = 0; i < cars.length; i++) {
            
            let arrTime = (target - cars[i].position ) / cars[i].speed ;

            if(stack.length === 0 || arrTime  > stack[stack.length - 1]) {
                stack.push(arrTime);
            }
        }
        return stack.length;
    }
}