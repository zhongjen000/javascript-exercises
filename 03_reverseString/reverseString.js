const reverseString = function(string) {
   let string_array = string.split('');
   let string_length = string.length;
   let array_reverse = [];
   for (const char of string_array) {
    array_reverse.unshift(char);
   }
   return array_reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
