// JavaScript program to find maximum triplet sum
let array = [2, 4, 5, 6, 4, 8, 3, 10, 9];
// Function to calculate maximum triplet sum
function maxTripletSum(arr)
{
	// Initialize the answer
	let ans = 0;
    let n = arr.length;

	for (let i = 1; i < n - 1; ++i) {
		let max1 = 0, max2 = 0;

		// find maximum value(less than arr[i])
		// from 0 to i-1
		for (let j = 0; j < i; j++)
			if (arr[j] < arr[i])
				max1 = Math.max(max1, arr[j]);

		// find maximum value(greater than arr[i])
		// from i+1 to n-1
		for (let j = i + 1; j < n; j++)
			if (arr[j] > arr[i])
				max2 = Math.max(max2, arr[j]);

		// store maximum answer
		if(max1 && max2)
			ans=Math.max(ans,max1+arr[i]+max2);
	}

	console.log(ans);
}

maxTripletSum(array);
