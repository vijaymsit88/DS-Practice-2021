let arr = [1,2,3,3]

    function balancedSum(arr) {
        // Write your code here
        //arr.sort((x,y)=>x-y);
        //console.log(...arr);
        let n = arr.length;
        let l = 1;
        let r = n-1;
        let lSum = arr[0];
        let rSum = arr[n-1];
        let k = n;
        
        while(l < r) {
        console.log(lSum + ' ' + rSum);  
        k = r-l;   
        if(k === 1 && lSum === rSum) {
            return r-l;
        }    
    
        if(lSum <= rSum) {
            lSum += arr[l];
            l++;
        } else {
            rSum += arr[r];
            r--; 
        }
        
        }
        
    }

console.log(balancedSum(arr)); 