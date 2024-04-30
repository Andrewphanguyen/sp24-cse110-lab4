1. prints 3
2. prints 150
3. prints 150
4. it will return [50,100,150] because it is the discounted prices calculated 50% with the inputs of 100,200, 300 array. Since discounted was a var it would have scope accross the whole function and would be updated to return whatever update value at the end of the function.
5. it would cause a error because i is using variable let and so the scope is only in the for loop.
6. error because discountedPrice is defined in the scope for loop and its using let
7. 150 because the scope is the whole function for finalPrice
8. It will return [50, 100, 150] because discounted is of type let and has scope of the whole function which means it will return whatever discounted update value at the end of the function.
9. error because i is only defined scope is in the for loop
10. 3 because the length of prices array is 3
11. It will return [50, 100, 150] because we are getting the 50% discounted of the input values and even though its constant we are not changing where the memory address is pointed to but instead the inside reference.
12.
    A. student.name
B. student['Grad Year']
c. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

13. 
a.  '3' + 2 = '32' 2 turns into a string so its concatenated
b. '3' - 2 = 1 3 is converted to a number and subtracted by 2
c.  3 + null = 3 because null is zero
d. '3' + null = '3null' null is converted to a string since 3 is a string so its concatenated
e. true + 3 = 4 true = 1 and add it to 3 gets 4
f. false + null = 0 both are converted to zero 
g. '3' + undefined = '3undefined'undefined converted to a string and concatenated with 3
h. '3' - undefined = NaN NaN is undefined when used in numbers.

14. A. '2' > 1 true because 2 is converted to a number
B. '2' < '12'  false because they are using string to compare
C. 2 == '2' true because 2 is converted to a number
D. 2 === '2' False bec === doesn't compare automatically
E. true == 2 false because 1 is converted to 1
F. true === Boolean(2) true bec Boolean(2) for is true for non zero numbers

15.  "==" first does any type conversions on the values before being compared and "===" does not do type conversion first.

16.  in javascript file
17.  it will return [2,4,6] because in the doSomething functionn it doubles every inputted value in the array. And so the modifyArray function will call doSomething function in its parameters under the name callback and so the values will be pushed into the new array using the input array and once the function is over would output [2,4,6]
18.  in javascript file
19.   prints 1 4 3 2
