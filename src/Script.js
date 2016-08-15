// write a function simplePush that takes in two arguments. The first argument will be an array. The second will either be a string or number. The function should PUSH the second argument into the first argument. Then return the first argument (which should now have the second argument PUSHed into it)

function simplePush(arr, item) {
  arr.push(item);
  return arr;
};

// write a function countLength that takes in one argument that will be an array. The function should return the length of the array.

function countLength(arr) {
  return arr.length;
};


 // write a function findElem that takes in two arguments. The first argument is will be an array. The second argument will be an integer. The function should then return the element that corresponds to the second argument. For example, if first argument is ['a','b','c'] and second argument is 2, findElem should return 'b'.

function findElem(arr, num1) {
  return arr[num1-1];
};

// write a function allMultiplesFour that doesn't take any arguments. The function should use a FOR loop to go through all the integers from 1 and 21 and PUSH all the multiples of 4 between 1 and 21 into an array. Return that array, which should contain all the multiples of 4 between 1 and 21.

function allMultiplesFour() {
  var arry = [];
  for (var i = 1; i < 21; i++) {
  if (i % 4 === 0) {
     arry.push(i);
    };
  };
  return arry;
};

// write a function allMultiplesOfArg that takes in one argument, which will be an integer. The function should return an array that contains all the integers which are multiples of the argument passed into the function as well as are between 1 and 31.

function allMultiplesOfArg(num2) {
  var array = [];
  for (var i = 1; i < 31; i++) {
    if (i % num2 === 0) {
      array.push(i);
      };
    };
    return array;
  };

 // write a function findMultiples that takes in two arguments. Both arguments will be integers. The function should return an array that contains all the integers less than the first argument that are multiples of the second argument. The array returned SHOULD NOT contain 0.

function findMultiples(num65, num5) {
  var array = [];
  for (var i = 1; i < num65; i++) {
    if (i % num5 === 0) {
      array.push(i);
    };
  };
  return array;
};

// write a function fizzBuzz that takes in one argument, which is an integer. The function should go through all the integers that are greater than 0 but less than or equal to that argument. For every integer that is greater than 0 but less than or equal to the argument passed in to the function, if the integer is a multiple of 3, the function should push "fizz" into an array, but if that integer is a multiple of 5, then the function should push "buzz" into the array, but if that integer is a multiple of both 3 AND 5, then the function should push "fizzbuzz" into the array. Then the function should retrun the array after going through the entire loop.

function fizzBuzz(num1) {
  var array = [];
  for (var i = 1; i < num1; i++) {
  if (i % 15 === 0) {
    array.push("fizzbuzz");
  } else if (i % 3 === 0) {
    array.push("fizz");
  }
  else if (i % 5 === 0) {
    array.push("buzz");}

    };
    return array;
  };


// write a function, lettersInString that takes in an argument, which will be a string and returns an array that contains all the letters in the argument passed in.

function lettersInString(hello) {
  var array = [];
  return array[hello];

};



// write a function joinLetters that takes in an argument, which will an array of strings. The function should return a string that all the strings in the array all joined together.






// write a function, reverseWord that takes in an argument, which will be a string and returns a string that is the reverse of the first string. For example if the argument passed in is "hello", the returned string should be "olleh"





// write a function isPalindrome that takes in one argument that will be a string. The function should return true if the argument is a palindrome and false if the argument is not a palindrome.
