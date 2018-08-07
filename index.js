function produceDrivingRange(num) {
  return function(block1,block2){
    block1 = parseInt(block1,10)
    block2 = parseInt(block2,10)

    sum = Math.abs(block1 - block2)

    if (num > sum){
      return `within range by ${num - sum}`
    }else{
      return `${sum-num} blocks out of range`
    }
  }
}

function produceTipCalculator(perc) {

  return function(fare){
    return fare*perc
  }


}
