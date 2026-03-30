class Solution {
    productExceptSelf(nums) {
        const res = [];
        let leftBasket = 1;

        for (let i = 0; i < nums.length; i++){
            res.push(leftBasket);
            leftBasket *= nums[i];
        }

        let rightBasket = 1;

        for (let i = nums.length - 1 ; i >= 0; i--) {
            res[i] *= rightBasket ;
            rightBasket *= nums[i];
        }

        return res;
    }
}
