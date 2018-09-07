const numToBinary = (num) => (num >>> 0).toString(2)
const binaryToNum = (binary) => parseInt(binary, 2)

console.log(numToBinary(4))

const arr = [3,1,2,3]

const sortByOnesInBinary = (numArr => {
    const uniqueArr = numArr.filter( (eaNum, index, self) => index == self.indexOf(eaNum))
    const formatArr = uniqueArr.map( eaNum => numToBinary(eaNum))
    const sorted = formatArr.sort(formatArr)
    return sorted.map(eaBinary => binaryToNum(eaBinary))
})

console.log(sortByOnesInBinary(arr))


