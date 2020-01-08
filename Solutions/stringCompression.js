// Implement a method to perform basic string compression using the
// counts of repeated characters. For example 'aabccca' would become
// 'a2b1c3a1'.

const stringCompression = (str) => {
  let output = ''
  let count = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1
    } else {
      output += `${str[i]}${count}`
      count = 1
    }
  }
  return output
}
