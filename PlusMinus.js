/*
Given an array of integers, calculate the ratios of its elements that are positive,negative , and Zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example
arr = [1,1,0,-1,-1]
There are  elements: two positive, two negative and one zero. Their ratios are 2/5 ,  2/5 and  1/5. Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the  function with the following parameter(s):
int arr[n]: an array of integers

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. 
The function should not return a value.
*/

let arr = [4, 3, -1, 0, 6, -5, 0];

function plusMinus(arr) 
{
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) 
 {
    if (arr[i] > 0) 
    {
      positive += 1;
    } 
    else if (arr[i] < 0) 
    {
      negative += 1;
    } 
    else 
    {
      zero += 1;
    }
 }

console.log((positive / arr.length).toFixed(6));
console.log((negative / arr.length).toFixed(6));  
console.log((zero / arr.length).toFixed(6));
  
}

console.log(plusMinus(arr)); // 0.428571, 0.285714, 0.285714