/*
In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

Function Description

Complete the  function with the following parameter(s):

int ar[n]: an array of integers

Return
long: the sum of the array elements
*/

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
let sum = 0;
function aVeryBigSum(ar) 
{
    for(let i=0; i< ar.length; i++)
    {
        sum += ar[i];
    }
    return sum;    
}
console.log(aVeryBigSum(ar)); //5000000015  