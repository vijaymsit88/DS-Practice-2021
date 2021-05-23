//Merge 2 sorted arrays
function mergeSortedArrays(array1, array2) {
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}
	const mergedArray = [];
	let i = 1;
	let j = 1;
	let array1Item = array1[0];
	let array2Item = array2[0];

	while(array1Item || array2Item) {
		if(!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}

console.log(mergeSortedArrays([1,2,3,4,4,5,60,31], [3,4,5,6,30,78]));