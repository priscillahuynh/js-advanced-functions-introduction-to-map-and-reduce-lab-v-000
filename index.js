function mapToNegativize(array) {
    return array.map(x => x * -1);
  }
  
function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(x=> x*2)
}

function mapToSquare(array){
    return array.map(x=> x**2)
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }

