let array = [7, 10, 4, 10, 6, 5, 2]

//A leader is an element in an array which does not have bigger element than itself towards its right.

function leadersInAnArray(array) {
    let curr_Leader = array[array.length-1];
    console.log(curr_Leader);
    //As last element is always a leader.
    for (i = array.length - 2; i >= 0; i--) {
        if (curr_Leader < array[i]) {
            curr_Leader = array[i];
            console.log(curr_Leader);
        }
    }
}
//only drawback of this approach is that it prints the leaders in reverse order.
//if we want to maintain the order of the leaders then we have to push these vaules in an array and then reverse that array.
//This increases the space comnplexity by O(n) but time complexity stays the same O(n)

leadersInAnArray(array);