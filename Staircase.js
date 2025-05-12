/*
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the  function with the following parameter(s):

int n: an integer
Print

Print a staircase as described above. No value should be returned.
Note: The last line is not preceded by spaces. All lines are right-aligned.
 */

let str = "";
function staircase(n)
{
    for(let i = 1; i<= n; i++)
    {
        str = "";
        for(let j = 1; j<= n ;j++) 
        {
            if(j <= n-i)
            {
                str += " ";
            }
            else
            {
                str += "#";
            }

        }
        console.log(str);
    } 
    
    
}
staircase(5);