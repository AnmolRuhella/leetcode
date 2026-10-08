/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let initial = 0
    let final = height.length-1
    let maxArea = 0 

  while(initial < final){
       // formula Area = lenth * breadth 
       let area = Math.min(height[initial] , height[final]) * (final - initial )
       if(area > maxArea){
        maxArea = area 
       }
       if(height[initial] <= height[final]){
        initial++
       } else{
        final--
       }
      
    }

    return maxArea;
    
};

// catch here is that : you need to increase or decrease pointer only when height of 
// rectangle is small if initial is small then increase initial if not then decrease final .
