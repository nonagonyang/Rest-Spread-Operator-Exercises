// Refactor it to use the rest operator & an arrow function:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


const filterOutOdds= (...nums)=>{return nums.filter((num)=>num%2===0)}
