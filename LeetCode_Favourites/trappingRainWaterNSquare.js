let array = [3, 0, 1, 2, 5, 1]
//let array = [2,0,2]
//let array = [3,2,1]
//let array = [1,2,3]
//Given the height of bars in a chart, find the amount of water which can be contained within the cavity.

function trappingRainWater(a) {
    let res = 0;
    let n = a.length;
    for (i = 1; i < n - 1; i++) {
        
        //Find the left maximum
        let lMax = a[i];
        for (j = 0; j < i ; j++) {
            lMax = Math.max(lMax, a[j]);
        }

        //Find the right maximum
        let rMax = a[i];
        for (j = i + 1; j < n; j++) {
            rMax = Math.max(rMax, a[j]);
        }
        
        //Find the mimimum of both and then subtract the current bar from it and add as total water collected
        res += (Math.min(lMax, rMax) - a[i]);
    }
    console.log('Water collected is: ' + res);
}

trappingRainWater(array);