//takes an array as an argument
//returns a new list
function arrayToList(array) {
    var list = null;
    //iterates over the array backward
    //for each element, add an object to the list
    for (let i = array.length - 1; i >= 0; i--) {
      list = {
        value: array[i],
        rest: list
      };
    }
    return list;
}

//takes a list as an argument
//returns a new array
function listToArray(list) {
    var array = [];
    //for every iteration, Node points to the current sublist and the body can read its Value property to get the current element
    //at the end of an iteration, Node moves to the next sublist
    //when node == null, the loop is finished 
    for (let node = list; node != null; node = node.rest) {
      array.push(node.value);
    }
    return array;
}
  
//takes an element and a list 
//returns a new list with element added to the front of the list
function prepend(element, list){
    var newList = {
      value: element,
      rest: list
    };
    return newList;
}
  
  
//function nth takes a list and a number
function nth(list,num){
    //returns index of list thats been converted to an array
    return listToArray(list)[num];
}
  
//recursive version of nth function
//takes a list and a num
//returns element at the given position in the list
function nthRecursive(list,num){
    //checks if num is out of bound 
    if(!list){
        return undefined;
    }
    //checks if position of list is 0
    //exit condition
    if (num == 0){
      return list.value;
    }
    else{
        //recurses through the current list with rest pointing to the next list and num decrementing by 1
      	//exits out of if statement when num == 0
        return nth(list.rest,num-1);
    }
      
}
  
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nthRecursive(arrayToList([10,20,30,40,50,60]),5));
// → 60
