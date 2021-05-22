console.log('Below is the result : FizzBuzz function')
function checkYuGiOh(n) {
  if(typeof(n) === 'string') console.log(`${n} invalid parameter '${n}'`);
  else console.log('')

  for(let i = 1; i <= n; i++){
    if(i % 30 === 0)  console.log('yu-gi-oh');
    else if(i % 10 === 0)  console.log('yu-oh');
    else if(i % 2 === 0)  console.log('yu');
    else if(i % 3 === 0)  console.log('gi');
    else if(i % 5 === 0)  console.log('oh');
    else  console.log(i);
  }
}
checkYuGiOh(10);

console.log('')
console.log('Below is the result : To Convert Fahr To Celsius function')
console.log('')

function convertFahrToCelsius(num) {
  let formular = (num - 32) * 5/9;
  if (typeof(num) === 'number') console.log(`${num} Fahr = ${formular} Celsius`)
  else if(typeof(num) === 'string'){
    console.log(`${num} Fahr = ${formular} Celsius`)
    console.log(`${num} is not a number but a/an ${typeof(num)}.`)
  }else console.log(`[${num}] is not a valid number but a/an ${typeof(num)}`)
}

convertFahrToCelsius([1,2,3])

