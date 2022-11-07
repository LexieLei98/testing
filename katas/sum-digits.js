/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  if (num.isIntegar()){
      if(num < 10){
    return num;
  } else {
    return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);}

  } 
  
  else {
    return String(num)
    .split('.').split('')
    .reduce(acc, curr) => {
      return acc + Number(curr);} 
}
} 


;


module.exports = sumDigits;
