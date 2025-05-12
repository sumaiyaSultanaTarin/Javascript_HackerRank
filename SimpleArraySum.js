/*
Given an array of integers, find the sum of its elements.
For example, if the array ar = [1,2,3], 1+2+3 = 6, so return 6.

Function Description

Complete the  function with the following parameter(s):
ar[n]: an array of integers

Returns
int: the sum of the array elements
*/
let ar = [1,2,3,4,11,10];
function simpleArraySum(ar) 
{
    let sum = 0;
    for(let i = 0; i< ar.length; i++)
    {
        sum += ar[i];
    }
    return sum;

}
console.log(simpleArraySum(ar));