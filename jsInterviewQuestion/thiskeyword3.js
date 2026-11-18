const obj = {
  multiplier: 3,

  getMultiplied: function (nums) {
    return nums.map(function (n) {
      return n * this.multiplier;
    });
  },

  getMultiplied2: function (nums) {
    return nums.map((n) => n * this.multiplier);
  }
};
const result1 = obj.getMultiplied([1,2,3])
const result2 = obj.getMultiplied2([1,2,3])


//output : [NAN , NAN , NAN ] , [9,9,9 ]