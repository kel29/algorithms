// Given an array of integers, return indices of the two numbers such that
// they add up to a specific target. You may assume that each input would
// have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  let visited = {}
  for (let i = 0; i < nums.length; i++) {
    if (visited[target - nums[i]] || visited[target - nums[i]] === 0) {
        return [visited[target - nums[i]], i]
    }
    visited[nums[i]] = i
  }
}
