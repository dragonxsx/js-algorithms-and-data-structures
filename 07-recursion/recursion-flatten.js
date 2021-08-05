function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    
    (function flat(arr) {
        if(arr.length === 0) return;
        
        let temp = arr[0];
        if(Array.isArray(temp)) {
            flat(temp);
        } else {
            result.push(temp);
        }
        
        return flat(arr.slice(1));
    })(arr);
    
    return result;
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ]));         // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]]));    // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]]));                // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]