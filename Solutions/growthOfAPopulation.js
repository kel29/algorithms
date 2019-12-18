const nbYear = (currentPop, percent, aug, popToSurpass) => {
  let years = 0
  while (currentPop < popToSurpass) {
    currentPop += aug + Math.floor(currentPop * percent / 100.00)
    years += 1
  }
  return years
}
