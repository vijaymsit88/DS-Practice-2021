function maximumNetworks(speed, minComps, speedThreshold) {
    // Write your code here
    let n = speed.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        let sumCount = 0;
        let sum = speed[i];
        for (let j = i + 1; j < n; j++) {
            sum += speed[j];
            sumCount++;
            if(sum >= speedThreshold){
                if(sumCount >= minComps) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

let speeds = [5,1,9,12,10,13]
maximumNetworks(speeds, 2, 15)