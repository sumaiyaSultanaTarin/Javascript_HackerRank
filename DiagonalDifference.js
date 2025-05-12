/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 =15.
The right-to-left diagonal = 3+5+9 = 17.
Their absolute difference is |15-17| = 2.

Function description

Complete the  function with the following parameter:
int arr[n][m]: a 2-D array of integers

Return
int: the absolute difference in sums along the diagonals
*/

let arr = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let sum1 = 0;
let sum2 = 0;
function diagonalDifference(arr)
{
   for(let i = 0; i<arr.length; i++)
   {
    for(let j=0; j<arr.length; j++)
    {
        if(i == j)
        {
            sum1 += arr[i][j];
        }
    }
   }
    for(let i = 0; i<arr.length; i++)
    {
     for(let j=0; j<arr.length; j++)
     {
          if(i + j == arr.length - 1)
          {
                sum2 += arr[i][j];
          }
     }
    }
    return Math.abs(sum1-sum2);

}
console.log(diagonalDifference(arr)); //0