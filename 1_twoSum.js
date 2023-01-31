const twoSum = function(nums, target) {
   const map = new Map(); 

   for (let i = 0; i <= nums.length; i++) {
       // nums[i] + x = target
       if(map.has(target - nums[i])) {
           // exists then return index, and current index
           return [map.get(target - nums[i]), i];
       }
       
       // add key(nums[i]), value(currentIndex)
       map.set(nums[i], i);
   }
};