function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else if (num > 10000) {
    return 'never'
  }
  else {
    return num
  }
}

module.exports = fizzbuzz;

function test() {

}
