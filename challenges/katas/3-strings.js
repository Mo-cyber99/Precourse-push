// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getLength(str) {
  // return the length of the passed string
  return str.length
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them
  return firstName + ' ' + lastName
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  var position;
  var length;

  if(str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  }
  else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
  return words.substring(words.lastIndexOf(' ') + 1);
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")
  return words.replace(/\s+/g, '-');
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
 words.toLowerCase().replace(/(?:^\w|[A-Z]||\b\w)/g, (ltr, idx) =>vidx === 0 ? ltr.toLowerCase():
 ltr.toUpperCase()).replace(/\s+/g, '');
}

function passwordValidation(password) {
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};
