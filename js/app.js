//build our own array

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1]
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       if (i >= index) {
//         this.data[i] = this.data[i + 1];
//       }
//     }
//     this.pop();
//   }
// }

// const newArray = new MyArray();
// newArray.push(0);
// newArray.push(1);
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// newArray.push(5);
// console.log(newArray);

// newArray.delete(2);
// console.log(newArray);


//pass in a string return a reversed string
// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== 'string') {
//     return "not a string";
//   } else {
//     let revStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       revStr += str[i];
//     }
//     return revStr;
//   }
// }

// console.log(reverse('abcdefg'));

//pass in 2 sorted arrays of numbers, merge the 2 arrays 
//into 1 array that is still sorted
arr1 = [1, 3, 5, 7, 9];
arr2 = [2, 3, 4, 6, 10, 11];

function mergeSortedArrays(arr1 = [], arr2 = []) {
  arr1Idx = 0;
  arr2Idx = 0;
  totalLen = arr1.length + arr2.length;
  let arr3 = [];
  //loop through arrays populating the 3rd array
  for (let i = 0; i < totalLen; i++) {
    //check indexes
    if (arr1Idx === arr1.length) {
      arr3.push(arr2[arr2Idx]);
      arr2Idx++;
    } else if (arr2Idx === arr2.length) {
      arr3.push(arr1[arr1Idx]);
      arr1Idx++;
    } else if (arr1[arr1Idx] > arr2[arr2Idx]) {
      arr3.push(arr2[arr2Idx]);
      arr2Idx++;
    } else {
      arr3.push(arr1[arr1Idx]);
      arr1Idx++;
    }
  }
  return arr1, arr2, arr3;
}

console.log(mergeSortedArrays(arr1, arr2));