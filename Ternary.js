/**
Using Ternary Operators
The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.
It is written in the format:
condition ? result_if_true : result_if_false
Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.
For example:
is_nice = true
// Using ternary operator.
state = is_nice ? "nice" : "not nice"
// Equivalent code using multi-line if statements.
if (is_nice)
  state = "nice"
else
  state = "not nice"
Write a function that uses the ternary operator to return "yeah" if b is true, and "nope" otherwise.
Examples
yeah_nope(true) ? "yeah"
yeah_nope(false) ? "nope"
Notes
N/A
**/
Solution
function yeah_nope(bool) {
	return bool ? "yeah" : "nope";
}