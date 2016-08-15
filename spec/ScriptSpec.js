// write a function simplePush that takes in two arguments. The first argument will be an array. The second will either be a string or number. The function should PUSH the second argument into the first argument. Then return the first argument (which should now have the second argument PUSHed into it)
describe("write a simplePush function", function () {
  it("has a function that returns second argument (3) PUSHed into first [1,2]", function () {
    expect( simplePush([1,2], 3) ).toEqual( [1,2,3]) ;
  });

  it("has a function that returns second argument ('a') PUSHed into first [1,2]", function () {
    expect( simplePush([1,2], 'a') ).toEqual([1,2,'a']);
  });

});


// write a function countLength that takes in one argument that is an array. The function should return the length of the array.

describe("write a countLength function", function () {
  it("has a function that returns length of an array with 5 elements passed in", function () {
    expect( countLength( [1,2,3,4,5]) ).toBe( 5 ) ;
  });

  it("has a function that returns length of an array with 3 elements passed in", function () {
    expect( countLength( [1,2,3]) ).toBe( 3 ) ;
  });

});

// write a function findElem that takes in two arguments. The first argument is an array. The second argument will be an integer. The function should then return the element that corresponds to the second argument. For example, if frist argument is ['a','b','c'] and second argument is 2, findElem should return 'b'.

describe("write a findElem function", function () {
  it("has a function that takes ['a', 'b', 'c'] and 2 as arguments", function () {
    expect( findElem(['a', 'b', 'c'] , 2) ).toBe('b') ;
  });

  it("has a function that takes ['c', 'd', 'e', 'f', 'g'] and 4 as arguments", function () {
    expect( findElem(['c', 'd', 'e', 'f', 'g'] , 4) ).toBe('f') ;
  });

});

// write a function allMultiplesFour that uses a FOR loop to go through all the integers from 1 and 21 and PUSH all the multiples of 4 between 1 and 21 into an array. Return that array, which should contain all the multiples of 4 between 1 and 21.

describe("write a allMultiplesFour function", function () {
  it("has a function returns all multiples of four between 1 and 21", function () {
    expect( allMultiplesFour() ).toEqual([4, 8, 12, 16, 20]) ;
  });

});

// write a function allMultiplesOfArg that takes in one argument, which will be an integer. The function should return an array that contains all the integers which are multiples of the argument passed into the function as well as are between 1 and 31.

describe("write a allMultiplesOfArg function", function () {
  it("has a function returns all multiples of arg (3) between 1 and 31", function () {
    expect( allMultiplesOfArg( 3 ) ).toEqual([3,6,9,12,15,18,21,24,27,30]) ;
  });

  it("has a function returns all multiples of arg (5) between 1 and 31", function () {
    expect( allMultiplesOfArg( 5 ) ).toEqual([5,10,15,20,25,30]) ;
  });

});

// write a function findMultiples that takes in two arguments. Both arguments will be integers. The function should return an array that contains all the integers less than the first argument that are multiples of the second argument. The array returned SHOULD NOT contain 0.

describe("write a findMultiples function", function () {
  it("has a function returns all multiples of second arg (3) between 1 and first arg (29) ", function () {
    expect( findMultiples(29, 3) ).toEqual([3,6,9,12,15,18,21,24,27]) ;
  });

  it("has a function returns all multiples of second arg (7) between 1 and first arg (36) ", function () {
    expect( findMultiples(36, 7) ).toEqual([7, 14, 21, 28, 35]) ;
  });

});


// write a function fizzBuzz that takes in one argument, which is an integer. The function should go through all the integers that are less than or equal to that argument. For every integer that is less than or equal to the argument passed in to the function, if the integer is a multiple of 3, the function should push "fizz" into an array, but if that integer is a multiple of 5, then the function should push "buzz" into the array, but if that integer is a multiple of both 3 AND 5, then the function should push "fizzbuzz" into the array. Then the function should retrun the array after going through the entire loop.


describe("write a fizzBuzz function", function () {
  it("has a function returns all fizzbuzz below 16 ", function () {
    expect( fizzBuzz(16) ).toEqual(["fizz", "buzz", "fizz", "fizz", "buzz", "fizz", "fizzbuzz"]) ;
  });

  it("has a function returns all fizzbuzz below 31 ", function () {
    expect( fizzBuzz(31) ).toEqual(["fizz", "buzz", "fizz", "fizz", "buzz", "fizz", "fizzbuzz", "fizz", "buzz", "fizz", "fizz", "buzz", "fizz", "fizzbuzz"]) ;
  });
});


// write a function, lettersInString that takes in an argument, which will be a string and returns an array that contains all the letters in the argument passed in.

describe("write a lettersInString function", function () {
  it("has a function returns all letters in 'hello' ", function () {
    expect( lettersInString('hello') ).toEqual(['h', 'e', 'l', 'l', 'o']) ;
  });

  it("has a function returns all letters in 'world' ", function () {
    expect( lettersInString('world') ).toEqual(['w', 'o', 'r', 'l', 'd']) ;
  });
});

// write a function joinLetters that takes in an argument, which will an array of strings. The function should return a string that all the strings in the array all joined together

describe("write a joinLetters function", function () {
  it("has a function joins ['a', 'b', 'c'] ", function () {
    expect( joinLetters(['a', 'b', 'c']) ).toEqual('abc') ;
  });

  it("has a function joins ['he', 'll', 'o'] ", function () {
    expect( joinLetters(['he', 'll', 'o']) ).toEqual('hello') ;
  });
});


// write a function, reverseWord that takes in an argument, which will be a string and returns a string that is the reverse of the first string. For example if the argument passed in is "hello", the returned string should be "olleh"

describe("write a reverseWord function", function () {
  it("has a function reverses 'hello' ", function () {
    expect( reverseWord('hello') ).toEqual('olleh') ;
  });

  it("has a function reverses 'pikachu' ", function () {
    expect( reverseWord('pikachu') ).toEqual('uhcakip') ;
  });
});


// write a function isPalindrome that takes in one argument that will be a string. The function should return true if the argument is a palindrome and false if the argument is not a palindrome.

describe("write a isPalindrome function", function () {
  it("has a function that returns true for 'racecar' ", function () {
    expect( isPalindrome('racecar') ).toBe(true) ;
  });

  it("has a function that returns true for 'madam' ", function () {
    expect( isPalindrome('madam') ).toBe(true) ;
  });

  it("has a function that returns true for 'letter' ", function () {
    expect( isPalindrome('letter') ).toBe(false) ;
  });

  it("has a function that returns true for 'javascript' ", function () {
    expect( isPalindrome('javascript') ).toBe(false) ;
  });


});
