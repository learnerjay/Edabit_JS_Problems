/*
In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
Write five adder functions:
*/
/*
add2(x) should return 2 + x.
add3(x) should return 3 + x.
add5(x) should return 5 + x.
add7(x) should return 7 + x.
add11(x) should return 11 + x.
*/
/*
Tips
Functions that consists only of a return, can be written as oneliner with an arrow function.
For example, the code:
function areSame(a, b) {
    return a == b;
}
Can be simplified to:
areSame = (a, b) => a == b;
*/
/*
Bonus
(a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().
Notes
This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
*/
/*
Test cases
Test.assertEquals(add2(1), 3)
Test.assertEquals(add2(9), 11)
Test.assertEquals(add2(435), 437)

Test.assertEquals(add3(1), 4)
Test.assertEquals(add3(9), 12)
Test.assertEquals(add3(435), 438)

Test.assertEquals(add5(1), 6)
Test.assertEquals(add5(9), 14)
Test.assertEquals(add5(435), 440)

Test.assertEquals(add7(1), 8)
Test.assertEquals(add7(9), 16)
Test.assertEquals(add7(435), 442)

Test.assertEquals(add11(1), 12)
Test.assertEquals(add11(9), 20)
Test.assertEquals(add11(435), 446)
*/
Solution
function add2(x) {
	return x + 2;
}

function add3(x) {
	return x + 3;
}

function add5(x) {
	return x + 5;
}

function add7(x) {
	return x + 7;
}

function add11(x) {
	return x + 11;
}