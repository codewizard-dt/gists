// INITIAL REGEX
let email = "joe-schmo@example.com";
let notEmail = "joe-schmoexample.com";
let emailWithCap = "joe-Schmo@example.com";
let emailWithSpaces = " joe-schmo@example.com ";
let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

let match = email.match(regex)
console.log(match)
/**
 * It matches, so it return an array
 * [
 *   'joe-schmo@example.com', // the full match
 *   'joe-schmo', // the first () matching group
 *   'example', // the second () matching group
 *   'com', // the third () matching group
 *   index: 0, // the index at which it found a match
 *   input: 'joe-schmo@example.com',
 *   groups: undefined
 * ]
 */
let notMatch = notEmail.match(regex)
console.log(notMatch)
/**
 * It doesn't match, so returns NULL
 */

let notMatchCap = emailWithCap.match(regex)
console.log(notMatchCap)
/**
 * It doesn't match, so returns NULL
 */
let notMatchSpaces = emailWithSpaces.match(regex)
console.log(notMatchSpaces)
/**
 * null
 * It doesn't match, so returns NULL
 */

// CAPITAL LETTERS REGEX
let regexCaps = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let regexLetters = /^([\w0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let regexCaseInsensitive = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i

let matchWithCap = emailWithCap.match(regexCaps)
let matchLetters = emailWithCap.match(regexLetters)
let matchAnyCase = emailWithCap.match(regexCaseInsensitive)

console.log(matchWithCap)
console.log(matchLetters)
console.log(matchAnyCase)
/**
 * It matches, so it return an array
 * [
 *   'joe-Schmo@example.com',
 *   'joe-Schmo',
 *   'example',
 *   'com',
 *   index: 0,
 *   input: 'joe-Schmo@example.com',
 *   groups: undefined
 * ] 
 * */



// GLOBAL REGEX

let paragraph = `All my friends email addresses are joe-schmo@example.com, billy-bob@example.org, and sallymontana4761@example.gov`
// Replace `^` anchor and `$` anchor with `\b` category 
let regexGlobal = /\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})\b/g
let matchGlobal = paragraph.match(regexGlobal)
console.log(matchGlobal)
/**
 * Returns an array of matches
 * [
 *   'joe-schmo@example.com',
 *   'billy-bob@example.org',
 *   'sallymontana4761@example.gov'
 * ]
 * 
 */

let fruit = /(apple|banana)/
let apple = 'apple'
let banana = 'banana'
let orange = 'orange'

let matchA = apple.match(fruit)
let matchB = banana.match(fruit)
let matchC = orange.match(fruit)

console.log(matchA)
console.log(matchB)
console.log(matchC)
/**
 * matchA returns `[ 'apple', 'apple', index: 0, input: 'apple', groups: undefined ]`
 * matchB returns `[ 'banana', 'banana', index: 0, input: 'banana', groups: undefined ]`
 * matchC returns `null`
 */