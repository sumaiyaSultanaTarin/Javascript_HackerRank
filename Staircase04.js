/*Staircase detail

This is a staircase of size :
. . . # . .	.
. . # # # . .
. # # # # # .
# # # # # # #
. # # # # # . 
. . # # # . .
. . . # . . .

Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size .
*/

let str = "";
function staircase(n) {
    let count = 1;
  for (let i = 1; i <= n; i++) {
    str = "";
    if (i <= 4) 
    {
      for (let j = 1; j <= i + 3; j++) {
        if (j <= 4 - i) {
          str += " ";
        } else {
          str += "#";
        }
      }
    }
    else
    {
        for (let j = 1; j <= n - count; j++) {
          if (j <= count) {
            str += " ";
          } else {
            str += "#";
          }
            
        }
        count++;
    }
    console.log(str);
  }
}
staircase(7);
