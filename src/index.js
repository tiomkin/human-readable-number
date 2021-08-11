module.exports = function toReadable (number) {
  let length = number.toString().length;
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let fromTenToTwenty = 
  ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let first;
  let second;
  let third;
  if (length == 1) {
      return digits[number];
  }
  else if (length == 2) {
      first = Math.floor(number / 10);
      second = number % 10;
      if (first == 1) {
          return fromTenToTwenty[second];
      }
      else {
          if (second == 0) {
              return `${tens[first - 2]}`;
          }
          else {
            return `${tens[first - 2]} ${digits[second]}`;
          }          
      }      
  }
  else if (length == 3) {
    first = Math.floor(number / 100);
    number = number - (first * 100);
    second = Math.floor(number / 10);
    third = number % 10;
    result = `${digits[first]} hundred `;
    if (second == 0) {
        if (third == 0) {
            return result.trim();
        }
        else {
            return result + digits[third];
        }
    }
    else if (second == 1) {
        result += fromTenToTwenty[third];
    }
    else {
        if (third == 0) {
            result += `${tens[second - 2]}`;
        }
        else {
            result += `${tens[second - 2]} ${digits[third]}`;
        }
    }   

    return result;
  }
}
