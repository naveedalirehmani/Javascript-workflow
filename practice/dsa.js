//? DSA

// function generateRandomArray(size, min, max) {
//   const randomArray = [];

//   for (let i = 0; i < size; i++) {
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomArray.push(randomNum);
//   }

//   return randomArray;
// }

// const arraySize = 100000; // Adjust the size of the array as needed
// const minValue = 1; // Minimum value of the random numbers
// const maxValue = 10000; // Maximum value of the random numbers

// const array = generateRandomArray(arraySize, minValue, maxValue);

// function bubbleSort(array) {
//     for (let main = 0; main < array.length; main++) {
//         for (let inner = 0; inner < array.length - main - 1; inner++) {
//             if (array[inner] > array[inner + 1]) {
//                 const temp = array[inner];
//                 array[inner] = array[inner + 1];
//                 array[inner + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// const time1 = performance.now();
// bubbleSort(array)
// console.log((performance.now() - time1) / 1000);

// function selectionSort(array) {
//     for (let main = 0; main < array.length; main++) {
//         for (let inner = main; inner < array.length; inner++) {
//             if (array[main] > array[inner]) {
//                 const temp = array[inner];
//                 array[inner] = array[main];
//                 array[main] = temp;
//             }
//         }
//     }
//     return array;
// }

// const time2 = performance.now();
// selectionSort(array);
// console.log((performance.now() - time2) / 1000);

// function quickSort(array, left = 0, right = array.length - 1) {
//     if (left >= right) return;

//     const pivotIndex = partition(array, left, right);

//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);

//     return array;
//   }

//   function partition(array, left, right) {
//     const pivotValue = array[right];
//     let pivotIndex = left;

//     for (let i = left; i < right; i++) {
//       if (array[i] < pivotValue) {
//         swap(array, i, pivotIndex);
//         pivotIndex++;
//       }
//     }

//     swap(array, pivotIndex, right);

//     return pivotIndex;
//   }

//   function swap(array, i, j) {
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   const time3 = performance.now()
//   const sortedArray = quickSort(array);
//   console.log((performance.now() - time3) / 1000);

// function same(array, array1) {
//   //check if all values in both arrays are numeric & not float.

//   //check if arrays lenth is same
//   if (array.length !== array1.length) {
//     return false;
//   }

//   // result
//   let result = true;

//   // loop
//   for (let outer = 0; outer < array.length; outer++) {

//     // return if result was set to false;
//     if (!result) break;

//     // search for a squared value.
//     for (let inner = 0; inner < array1.length; inner++) {

//       // breaking loop if found
//       if (array[outer] ** 2 === array1[inner]) {
//         //setting the matched value to false so that it does not match again.
//         array1[inner] = false;
//         break;
//       }

//       // result to false if not squared value was found
//       if (inner === array.length - 1) {
//         result = false;
//         break;
//       }
//     }
//   }

//   // return boolean
//   return result;
// }

// const result = same([1, 2, 1], [4,4,1]);
// console.log(result);

// ! frequency method.

// function anagram(word1, word2) {

//   if (word1.length !== word2.length) {
//     return false
//   }

//   const word1Frequency = {}
//   const word2Frequency = {}

//   for (let letter of word1) {
//     word1Frequency[letter] = ++word1Frequency[letter] || 1
//   }

//   for (let letter of word2) {
//     word2Frequency[letter] = ++word2Frequency[letter] || 1
//   }

//   for (let props in word1Frequency) {
//     if (!(word2Frequency[props] && word2Frequency[props] === word1Frequency[props])) {
//       return false
//     }
//   }

//   return true

// }

// console.log(anagram('iceman', 'cinema')); // Expected output: true
// console.log(anagram('hello', 'world')); // Expected output: false
// console.log(anagram('listen', 'silent')); // Expected output: true
// console.log(anagram('debit card', 'bad credit')); // Expected output: true
// console.log(anagram('test', 'rest')); // Expected output: false
// console.log(anagram('school master', 'the classroom')); // Expected output: true

// // ! Multiple pointer method

// function countUniqueValues(sortedArray) {
//   if (!sortedArray.length) return 0;
//   let current = 0;
//   for (let index = 0; index < sortedArray.length; index++) {
//     if (!(sortedArray[current] === sortedArray[index])) {
//       current++;
//       sortedArray[current] = sortedArray[index];
//     }
//   }
//   return current + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3]));
// console.log(
//   countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 10, 15, 17])
// );
// console.log(countUniqueValues([]));

// function repeatingString(para) {
//   //return if string is empty

//   //to lowercase & split
//   const lowerCase = para.toLowerCase().split("");

//   let left = 0;
//   let total = 0;

//   let count = 0;
//   for (let index = 1; index <= lowerCase.length; index++) {
//     if (lowerCase[left] === lowerCase[index - 1]) {
//       ++count;
//     } else {
//       left = index;
//       if (count > total) {
//         total = count;
//         count = 0;
//       }
//     }
//   }

//   return total;
// }

// console.log(repeatingString("hellothere"));

// // ? max sub array with sliding window approach
// function maxSumSubArray(array,num) {

//     if(!array.length) return null;

//     let total = 0;

//     for (let index = 0; index < num; index++) {
//         total += array[index];
//     }

//     let sum = total;

//     for (let index = num; index < array.length; index++) {
//         sum = sum - array[index-num] + array[index]
//         total = Math.max(sum,total)
//     }

//     return total

// }

// console.log(maxSumSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // Expected output: 19
// console.log(maxSumSubArray([1, 2, 3, 4, 5], 2));            // Expected output: 9
// console.log(maxSumSubArray([1, 2, 3, 4, 5], 5));            // Expected output: 15
// console.log(maxSumSubArray([1, -1, 2, -2, 3, -3], 3));      // Expected output: 4
// console.log(maxSumSubArray([10, -2, 5, 6, -1, 2], 3));      // Expected output: 13

// // ? FAILED:  first unique character in a string with frequency counter method.
// var firstUniqChar = function(s) {
//     let left = 0;
//     let array = s.split("")

//     const frequency = new Map()

//     for(let i = 0 ; i<array.length ; i++){
//         if(frequency.has(array[i])){
//             frequency.set(array[i],frequency.get(array[i])+1)
//         }else {
//             frequency.set(array[i],1)
//         }
//     }

//     console.log(frequency)
//     const values = Array.from(frequency.entries())

//     console.log(values)
//     for(let i = 0; i<values.length; i++){
//         console.log(values[i][1])
//         if(values[i][1]){
//             return i
//         }
//     }

//     return null
// };

// console.log(firstUniqChar('leetcode'))

// // ? Anagrams with fequency counter method.
// function Anagrams(str1, str2) {
//     const anagramStr1 = str1.toLowerCase()
//     const anagramStr2 = str2.toLowerCase()

//     if (anagramStr1.length !== anagramStr2.length) {
//         return false;
//     }

//     const counter = {};

//     for (let char of anagramStr1) {
//         counter[char] = (counter[char] || 0) + 1
//         console.log(counter[char])
//     }

//     for (let char of anagramStr2) {
//         if (!counter[char]) {
//             return false;
//         }
//         counter[char]--;
//     }

//     return true
// }

// console.log(Anagrams("listen", "silent")); // true
// console.log(Anagrams("hello", "world"));   // false
// console.log(Anagrams("Dormitory", "dirty room")); // true
// console.log(Anagrams("astronomer", "moon starer")); // true
// console.log(Anagrams("debit card", "bad credit")); // true
// console.log(Anagrams("hello", "hola")); // false

// // ? collecting odd values
// function collectOddValues(array){

//     let result = []

//     if(!array.length) return result

//     if(!(array[0] % 2 === 0)) result.push(array[0])

//     result = [...result, ...collectOddValues(array.slice(1))]

//     return result
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// // ? linear search
// function lenearSearch (array,find){

//     //loop through the list.
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         // returning index if element if found.
//         if(element === find){
//             return index
//         }
//     }
//     // returning -1 if element is not found.
//     return -1
// }

// console.log(lenearSearch([1,2,3,4,5,6,7,8,9],1))

// // ? FAILED : binary search.
// function binarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle = Math.floor(nums.length / 2);
//   let found = 0;

//   while (found === 0) {

//     if(nums[0] == target){
//         return 0
//     }

//     if (right - left === 1) {
//       found = -1;
//     }

//     if (nums[middle] === target) {
//         found = middle;
//     }

//     if (target > nums[middle]) {
//         left = middle;
//         middle = (right-left===1) ? Math.ceil((right - left) / 2) + middle : Math.floor((right - left) / 2) + middle;
//     } else {
//         right = middle;
//         middle =  middle - Math.floor((right - left) / 2);
//     }
// }

//   return found;
// }

// console.log(binarySearch([9, 29, 29, 30, 35, 53, 60, 84, 89, 95, 100,101], 101));
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // Output: 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1 (Element not found)
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // Output: 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // Output: 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3
// console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
// console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1 (Element not found)
// console.log(
//   binarySearch(
//     [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
//       39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
//       57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
//       75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
//       93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
//       109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
//       124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
//       139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
//       154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
//       169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183,
//       184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
//       199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
//       214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
//       229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243,
//       244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
//       259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
//       274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288,
//       289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303,
//       304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318,
//       319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333,
//       334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348,
//       349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363,
//       364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378,
//       379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393,
//       394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408,
//       409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423,
//       424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438,
//       439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453,
//       454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
//       469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483,
//       484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498,
//       499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513,
//       514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528,
//       529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543,
//       544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558,
//       559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573,
//       574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588,
//       589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603,
//       604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618,
//       619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633,
//       634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648,
//       649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663,
//       664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678,
//       679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693,
//       694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708,
//       709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723,
//       724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738,
//       739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753,
//       754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768,
//       769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783,
//       784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798,
//       799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813,
//       814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828,
//       829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843,
//       844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858,
//       859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873,
//       874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888,
//       889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903,
//       904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918,
//       919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933,
//       934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948,
//       949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963,
//       964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978,
//       979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993,
//       994, 995, 996, 997, 998, 999, 1000,
//     ],
//     985
//   )
// );

// // ? searching for a pattern in a string. navie approach.
// function stringPattern(string, pattern) {

//   let counter = 0;

//   for (let index = 0; index < string.length; index++) {
//     for (let innerIndex = 0; innerIndex < pattern.length; innerIndex++) {
//       if(!(pattern[innerIndex] === string[index+innerIndex])){
//         break;
//       }
//       if(innerIndex == pattern.length-1){
//         counter++
//       }
//     }
//   }
//   return counter;
// }

// console.log(stringPattern('omglaksomgjdhglkajshdomglkgjahomgsdg', "omg")); // Expected output: 4
// console.log(stringPattern('omglomglomglomg', "omg")); // Expected output: 4
// console.log(stringPattern('abcabcabcabcabc', "abc")); // Expected output: 5
// console.log(stringPattern('aaaaaa', "aa")); // Expected output: 5
// console.log(stringPattern('abcdefg', "xyz"));

// const button = document.querySelector('.outlook');

// button.onclick = async ()=>{
//     const response  = await fetch('http://localhost:4000/v1/authentication/oauth/outlook',{
//         method:"GET"
//     })
//     const data = await response.json()

// }

// // REVISIONS

// // Understanding the problem.
// // Can I restate the problem?
// // what are the inputs that go into the problem?
// // what are the expected output to the problem?
// // Can the output be derived from the input?
// // Labelling the important pieces.

// function anagram(word1, word2) {
//   if (word1.length != word2.length) {
//     return false;
//   }

//   const lowerCaseWord1 = word1.toLowerCase();
//   const lowerCaseWord2 = word2.toLowerCase();

//   const word1Frequency = {};
//   const word2Frequency = {};

//   for (let letter of lowerCaseWord1) {
//     word1Frequency[letter] = ++word1Frequency[letter] || 1;
//   }

//   for (let letter of lowerCaseWord2) {
//     word2Frequency[letter] = ++word2Frequency[letter] || 1;
//   }

//   for (let letter in word1Frequency) {
//     if (!word2Frequency[letter]) {
//       return false;
//     }
//     if (!(word2Frequency[letter] === word1Frequency[letter])) {
//       return false;
//     }
//   }

//   return true;
// }

// module.exports = anagram;

// function countUniqueValues (sortedArray){
//     if(!sortedArray.length) return 0

//     let current = 0;
//     let count = 1
//     for (let index = 1; index < sortedArray.length; index++) {
//         if(sortedArray[current] != sortedArray[index]){
//             count++;
//             current = index
//         }
//     }

//     return count
// }

// module.exports = countUniqueValues

// function maxSumSubArray(array, num) {
//   // edge cases
//   if (!array.length) return null;
//   if (array.length === 1) return array[0];
//   if (array.length < num) return null;

//   let total = 0;
//   for (let index = 0; index < num; index++) {

//     total += array[index];
//   }

//   let sum = total;

//   for (let index = num; index < array.length; index++) {
//     if (sum - array[index - num] + array[index] > sum) {
//       sum = sum - array[index - num] + array[index];
//     }
//   }

//   return Math.max(sum, total);
// }

// module.exports = maxSumSubArray;

// function factorial(n) {
//     if(n === 0 || n === 1){
//         return 1
//     }

//     return n * factorial(n-1)
// }

// module.exports = factorial

// function stringPattern(string, pattern) {
//   let counter = 0;

//   for (let index = 0; index < string.length; index++) {
//     for (let innerIndex = 0; innerIndex < pattern.length; innerIndex++) {
//       if (!(pattern[index] === string[index + innerIndex])) {
//         break;
//       }
//       if (innerIndex === pattern.length - 1) {
//         counter++;
//       }
//     }
//   }

//   return counter;
// }

// console.log(stringPattern("omglaksomgjdhglkajshdomglkgjahomgsdg", "omg"));

// function selectionSort(array) {
//   for (let outer = 0; outer < array.length; outer++) {
//     let min = outer;
//     for (let inner = outer+1; inner < array.length; inner++) {
//         if(array[min] > array[inner]){
//             min = inner
//         }
//     }
//     let temp = array[outer];
//     array[outer] = array[min]
//     array[min] = temp;
//   }
//   return array;
// }

// console.log(selectionSort([1, 2, 4234, 35, 46, 4, 23, 434, 23]));

// module.exports = stringPattern;

//TODO : DSA.

// anagram //? bad example.
// function anagram(word1, word2) {
//   let arrayWord2 = word2.split("");

//   for (let index = 0; index < word1.length; index++) {
//     const element = word1[index];
//     for (let innerIndex = 0; innerIndex < arrayWord2.length; innerIndex++) {
//       if (arrayWord2[innerIndex] === element) {
//         arrayWord2.splice(innerIndex, 1);
//         break;
//       }
//     }
//   }
//   if (!arrayWord2.length) {
//     return true;
//   }
//   return false;
// }

// anagram //? frequency countrer method.
// function anagram(word1, word2) {
//   word1 = word1.replace(/\s+/g, "");
//   word2 = word2.replace(/\s+/g, "");

//   let word1Frequency = {};
//   let word2Frequency = {};

//   for (let index = 0; index < word1.length; index++) {
//     const element = word1[index];
//     if (element in word1Frequency) {
//       word1Frequency[element] = ++word1Frequency[element];
//     } else {
//       word1Frequency[element] = 1;
//     }
//   }

//   for (let index = 0; index < word2.length; index++) {
//     const element = word2[index];
//     if (element in word2Frequency) {
//       word2Frequency[element] = ++word2Frequency[element];
//     } else {
//       word2Frequency[element] = 1;
//     }
//   }

//   for (const key in word1Frequency) {
//     if (
//       !(key in word2Frequency && word1Frequency[key] === word2Frequency[key])
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagram("iceman", "cinema")); // Expected output: true
// console.log(anagram('hello', 'world')); // Expected output: false
// console.log(anagram('listen', 'silent')); // Expected output: true
// console.log(anagram('debit card', 'bad credit')); // Expected output: false (spaces are not handled)
// console.log(anagram('test', 'rest')); // Expected output: false
// console.log(anagram('school master', 'the classroom')); // Expected output: false (spaces are not handled)

// module.exports = anagram;