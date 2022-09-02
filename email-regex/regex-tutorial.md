# Email Regex Tutorial

Every time we collect an email, we should confirm that it is in fact an email! One way to do this is to check the string to see if it matches the pattern of a generic email, and we can do this task quickly with a regex.

## Summary

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

[Play with this regex on Regex101.com](https://regex101.com/r/E78qDM/1)

The regex that we're discussing has 5 key components:
1) an alphanumeric string for the user name
2) the "@" symbol
3) an alphanumeric string for the domain name
4) at least one "."
5) an alphabetical string for the top level domain name (ie: com, org)

We'll start by breaking down the regex into components and then going into details about the types of components and what they do.`

## Table of Contents

- [Email Regex Components](#regex-components-in-sequence)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components in Sequence

| Literal | Purpose | Classes | Expressions | Quantifiers | Anchors
|----|----|----|----|----|----|
| `/` | Beginning of regex | | | |
| `^` | Matches the beginning of the string | | | | `^` |
| `([a-z0-9_\.-]+)` | A group of characters that consists of one or more lower case letter, number, underscore, period or dash | `a-z`, `0-9` | `[a-z0-9_\.-]` | `+`
| `@` | Matches the '@' character | 
| `([\da-z\.-]+)` | A group of characters that consists of one or more lower case letter, number, underscore, period or dash | `\d`, `a-z` | `[\da-z\.-]` | `+`
| `\.` | Matches the '.' character (the backslash is included to escape the character which normally has a special function) | 
| `([a-z\.]{2,6})` | A group of 2-6 characters consisting of lower case letters or periods | `a-z` | `[a-z\.]` | `{2,6}`
| `$` | Matches the end of the string | | | | `$` |
| `/` | End of regex 


### **Anchors**
___

Regex anchors don't match a character. Instead they match a position in the string. There are 2 anchors in this regex. 

- the caret `^` matches the beginning of the string
- the dollar sign `$` matches the end of the string

### **Quantifiers**
___

Quantifiers tell us that a character can repeat a certain number of times. There are two unique quantifiers in this regex.

- the plus sign `+` matches one or more of the character
- the curly brackets with numbers `{2,6}` matches at least two but no more than 6 of the character

### **Grouping Constructs**
___

By enclosing a set of characters in parentheses `()` the regex will match a substring. There 3 substrings in this regex.

- the first group `([a-z0-9_\.-]+)` matches the user name
- the second group `([\da-z\.-]+)` matches the domain name
- the third group `([a-z\.]{2,6})` matches the top level domain name

### **Bracket Expressions**
___


By enclosing a set of characters in square brackets `[]` the regex will match any charcter in the set. There are 3 bracket expressions in this regex.

- the first expression `[a-z0-9_\.-]` matches any lower case letter, any digit, an underscore, a period, or a dash
- the second expression `[\da-z\.-]+` matches any digit `\d`, any lower case letter, a period, or a dash
- the third expression `[a-z\.]` matches any lower case letter or a period

### **Character Classes**
___

Character classes distinguish between types of characters such as letters and digits. There are 3 character classes in this regex.

- the first class `a-z` matches all lower case letters
- the second class `0-9` matches all digits
- the third class `\d` also matches all digits

### **The OR Operator**
___

There is an "or" operator `|` that will match the specified characters on either side, but this regex doesn't use it.

Here's a breakdown of the OR operator anyway....
```js
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
```

### **Flags**
___

There are flags that can be used to change the search algorithm used in the regex, but this regex doesn't use any flags.

### **Character Escapes**
___

Certain special characters are not matched literally, but if we want a literal match we can escape that character with a backslash. This regex escapes the `.` character multiple times. Ordinarily the `.` character matches any character except a new line. However since we use `\.`, the regex will only match the `.` character literally.



# Usage and Modifications

### **String Prototype Match Method**
```js
let email = "joe-schmo@example.com";
let notEmail = "joe-schmoexample.com";
let emailWithCap = "joe-Schmo@example.com";
let emailWithSpaces = " joe-schmo@example.com ";

let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

let match = email.match(regex)
console.log(match)
/**
 * It matches, so it returns an array
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
 * null
 * "joe-schmoexample.com" doesn't have the `@` character
 * It doesn't match, so returns NULL
 */

let notMatchCap = emailWithCap.match(regex)
console.log(notMatchCap)
/**
 * null
 * The regex does not include capital letters
 * It doesn't match, so returns NULL
 */

let notMatchSpaces = emailWithSpaces.match(regex)
console.log(notMatchSpaces)
/**
 * null
 * The regex does not include spaces
 * It doesn't match, so returns NULL
 */
```

### **Match Uppercase and Lowercase Letters**

#### Three options to make this happen

| Modification | Position | Type | Purpose |
|---|---|---|---|
| `A-Z` | Next to `a-z` | character class | Add upper case letters
| | **OR** |
| `\w` | Instead of `a-z` | character class | Matches any word character
| | **OR** |
| `/regex/i` | After closing `/` | flag | Case insensitive flag which allows upper and lower case letters


```js
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
 * All three variations return the same array response containing the match
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

```

### **Match Method with Global Flag**

**Changes**
| Modification | Position | Type | Purpose |
|---|---|---|---|
| `/regex/g` | After closing slash `/` | flag | global flag to find all matches instead of only first match
| `\b` | Replaced `^` | character class | Match word boundary instead of beginning of string |
| `\b` | Replaced `$` | character class | Match word boundary instead of end of string |

```js
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
```

## Author

[David Taylor](https://github.com/codewizard-dt) is a full stack developer who loves simplifying and explaining code.