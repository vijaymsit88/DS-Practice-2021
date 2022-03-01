//let array = [1,5,3,1,2,8]
let array = [1,5,3,8,12]
//Problem - Given an array of buy and sell prices, try to come up with the maximum profit.

function stockByBuyNSell(a) {
    let maxProfit = 0;
    let n = a.length;
    let profitTrend;
    //Trick is keep adding the profit if there is any between 2 consicutive data points.
    for (let i = 1; i < n; i++) {
        profitTrend = a[i] - a[i - 1];
        if (profitTrend > 0) {
            maxProfit += profitTrend;
        }
    }
    console.log("Maximum profit is " + maxProfit);
}

stockByBuyNSell(array);