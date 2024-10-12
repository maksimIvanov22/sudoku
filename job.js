const solveTask = document.querySelector('.solveTask')
const small_block = document.querySelectorAll('.small_block')



for(let i = 0; i < small_block.length; i += 1){
   solveTask.addEventListener('click', () => {
    const val = small_block[i].innerText
    console.log(val)
}) 
}
 











const middle_block = '0153426798'

function comparison() {
const num = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
const newMiddle_block = middle_block.split('').sort((a, b) => a - b)
for(let i = 0; i < newMiddle_block.length; i += 1){
    if (num[i] !== newMiddle_block[i]){
    return 'Не решено'
  }
}
return 'Решено'
}
console.log(comparison(middle_block))

