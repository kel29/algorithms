// If you can use additional data structures beyond strings or arrays,
// an object is a very practical way to solve this problem:

const uniqueString = (str) => {
  const characters = {}
  for (let i = 0; i < str.length; i++) {
    if (characters[str[i]]) {
      return false
    } else {
      characters[str[i]] = true
    }
  }
  return true
}

// Time complexity of this solution is O(n). In our worst case scenerio,
// the string is completely unique and we will have to parse through each
// character to verify that. However, if a string is not composed of unique
// characters, we will exit the loop at the first repeat. Effiency could
// also be increased if we included a gaurd clause at the beginning to immediately
// return false if the string was longer than the character set we were using,
// but the character set is not clarified in the question.

// If we are restricted to only using a string/array to solve the problem, we
// can instead create an array of booleans where each index represents the
// character value. This does mean we need to know whether we are working with
// unicode or ASCII, so we will assume ASCII for the solution below. This also
// mean we can add in that gaurd clause to help improve effiency.

const uniqueString2 = (str) => {
  if (str.length > 128) { return false }
  const characters = Array(128)
  for (let i = 0; i < str.length; i++) {
    if (characters[str.charCodeAt(i)]) {
      return false
    } else {
      characters[str.charCodeAt(i)] = true
    }
  }
  return true
}
