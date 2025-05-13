/*Staircase detail

This is a staircase of size :

. . . # . . .
. . # # # . .
. # # # # # .
# # # # # # #



Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size .
*/

let str = "";
function staircase(n)
{
    for(let i = 1; i<= n; i++)
    {
        str = "";
        for(let j = 1; j<= i+3 ;j++) 
        {
            if(j <= n-i)
            {
                str += " ";
            }
            else
            {
                str += "*";
            }

        }
        console.log(str);
    } 
    
    
}
staircase(4);