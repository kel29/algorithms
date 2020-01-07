// Given two strings, write a mentod to decide if one is a permutation of the other

const stringPermutation = (str1, str2) => {
  if (str1.length !== str2.length) { return false }
  return [...str1].sort().join() === [...str2].sort().join()
}
