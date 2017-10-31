# Algorithm

## This algorithm won the battle but not the war

Complete the function so as, given an array `elements` consisting of `N` positive integers, return the first element that has no duplicates on said array.

For instance, for the input: `elements = [1, 1, 7, 7, 8, 9, 7, 8]`

The method should return `9`

This is because the only element that does not have any duplicates is the number `9`

If the array happens to contain more than one element with no duplicates, the function should only return the first element with no duplicates, be it that the original order of the array was not modified.

`elements = [2, 7, 6, 8, 7, 2, 10]`

`output = 6`

If the array does not contain any element with no duplicates, then the function should return `-1`

`elements = [120, 560, 560, 120]`

`output = -1`