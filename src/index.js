
module.exports = function toReadable (number) {
    let units = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let number_digits = number.toString().split("").reverse();

  if (number<20){
      return units[number];
  } 
  else if (number<100){
    if (number_digits[0] == 0) { 
		return dozens[number_digits[1]]
	}
    else {
      return dozens[number_digits[1]] + ' ' + units[number_digits[0]];
    }
  } 
  else if ((number_digits[0] == 0) && (number_digits[1] == 0)){
      return units[number_digits[2]] + ' hundred';
  } 
  else if ((number_digits[0] == 0) && (number_digits[1] != 1)){
      return units[number_digits[2]] + ' hundred ' + dozens[number_digits[1]];
  } 
  else if (number % 100 < 20){
      return units[number_digits[2]] + ' hundred ' + units[number % 100];
  } 
  else {
      return units[number_digits[2]] + ' hundred ' + dozens[number_digits[1]] + ' ' + units[number_digits[0]];  
  }  
}
