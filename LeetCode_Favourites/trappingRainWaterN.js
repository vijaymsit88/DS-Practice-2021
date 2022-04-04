let array = [3, 0, 1, 2, 5]
//let array = [2,0,2]
//let array = [3,2,1]
//let array = [1,2,3]
//Given the height of bars in a chart, find the amount of water which can be contained within the cavity.

function trappingRainWater(a) {
    let res = 0;
    let n = a.length;
    let lMax = [];
    let rMax = [];

    //Find the left maximum for each node and store it in an array
    lMax[0] = a[0];
    for (j = 1; j < n; j++) {
        lMax[j] = Math.max(lMax[j-1], a[j]);
    }

    //Find the right maximum for each node and store it in an array
    rMax[n-1] = a[n-1];
    for (j = n-2; j >=0; j--) {
        rMax[j] = Math.max(rMax[j+1], a[j]);
    }

    for (i = 1; i < n - 1; i++) {
        //Find the mimimum of both and then subtract the current bar from it and add as total water collected
        res += (Math.min(lMax[i], rMax[i]) - a[i]);
    }
    console.log('Water collected is: ' + res);
}

trappingRainWater(array);
