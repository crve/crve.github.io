// Akachukwu Obi

// Project Euler #1. Question retrieved 24/May/17 from https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// The multi35 function runs an iteration to generate the set of multiples of 3 or 5 within a given range (not inclusive), then runs another iteration to sum up all the members of that set. The multi35 function works for any range of integers
// ...
var multi35 = function (start, count) {
    "use strict";
	var set, setsum, i; // initialize variables 
	setsum = 0;
	set = [];
	while (start < count) { // start < count does not include the last value of the range given
		if (start % 3 === 0 || start % 5 === 0) { // the modulo % operation is a check for multiple, || is the 'or' statement.
            set.push(start);
        }
		start = start + 1;
	}
	for (i = 0; i < set.length; i = i + 1) { // runs a loop to add the elements of the set generated
        setsum = setsum + set[i];	
	}
    console.log(set);
    return setsum;
};
// > multi35(1,12)   --> [3,5,6,9,10], 33
// > multi35(1,1000) --> [set of 466 elements], 233168

// While multi35 runs a hard iterative algorithm to return both elements of the set of multiples of 3 and 5, and the sum of these elements. However, the sum of n natural numbers is the geometric sum S_n = n*(n+1)/2 or (n^2 + n)/2, which could be modified to return the sum of multiples of k \in Z within n natural numbers.

// Given this algorithm, sum of the first n natural numbers can be written thus
var multin = function (count) {
    "use strict";
    return 0.5 * count * (count + 1);
};
// > multin(10) --> 55
// > multin(4) --> 10

// or
var multin2 = function (count) {
    "use strict";
    return 0.5 * (Math.pow(count, 2) + count);
};
// > multin2(10) --> 55
// > multin2(4) --> 10

// To find the sum of the first n numbers divisible by k integers, you just multiply the output by k. 
var multik = function (count, multipleof) {
    "use strict";
    return multipleof * 0.5 * count * (count + 1);
};
// > multik(3,2) --> 12
// > multik(2,3) --> 9

// However, to find the sum of multiples of k within the first n natural numbers, you would focus on the count of numbers divisible by k within those n natural numbers. For example, there are exactly Math.floor(1000/3) numbers divisible by 3 between 1 and 1000. Therefore the sum of multiples of 3 between 1 and 1000 will be 3*333*(333+1)/2.
var multiK = function (count, multipleof) {
    "use strict";
    return multipleof * 0.5 * Math.floor(count / multipleof) * (Math.floor(count / multipleof) + 1);
};
// > multiK(10,3) --> 18
// > multik(12,3) --> 30

// I can build on this code to find the sum of multiples of 3 and 5 less than 1000.
var Multi35 = function (count) {
	"use strict";
	var m3, m5, m15; // initialize variables
	count = count - 1; // comment out this code to include count, i.e, sum less than or equal to count
	m3 = 3 * 0.5 * Math.floor(count / 3) * (Math.floor(count / 3) + 1); // sum of multiples of 3
	m5 = 5 * 0.5 * Math.floor(count / 5) * (Math.floor(count / 5) + 1); // sum of multiples of 5
	m15 = 15 * 0.5 * Math.floor(count / 15) * (Math.floor(count / 15) + 1); // numbers counted twice, multiples of both 3 and 5
	return m3 + m5 - m15;
};
// > Multi35 (1000) --> 233168