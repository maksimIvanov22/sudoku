// const middle_block = document.querySelectorAll('.middle_block')

const middle_block = '0153426798'

function comparison() {
  
const num = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
const newMiddle_block = middle_block.split('').sort((a, b) => a - b)
console.log(newMiddle_block)
console.log(num)
if (num === newMiddle_block){
    return true
}
else {
    return false
}
// console.log(num)
}
console.log(comparison(middle_block))

