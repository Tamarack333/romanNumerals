function convertToRoman(num) {
  var romanInts = ['M',['C','D'],['X','L'],['I','V']]
  var pieces = num.toString().split('')
  var converted = ''
  for (let i = 0; i < pieces.length; i++){
    let currInt = parseInt(pieces[i])
    let romanSection = romanInts[(4 - pieces.length)+i]
    if(currInt >= 5){
      if(currInt === 9){
        converted += romanSection[0] + romanInts[romanInts.indexOf(romanSection)-1][0]
        continue
      }
      converted += romanSection[1]
      currInt-=5
    }
    if(currInt === 4){
      converted += romanSection[0] + romanSection[1]
      continue
    }
    for(let k = currInt; k > 0; k--){
      converted += romanSection[0]
    }
  }
  return converted
}

console.log(convertToRoman(9)) // >>MMDXCVII
