let data
fetch("./puzzles.txt").then(response => response.text()).then(resp => {
    data = resp;
});


const newTaskButton = document.querySelector('.newTask');
let count = 0
newTaskButton.addEventListener("click", () => {
    getNewTask();
})

async function getNewTask() {
    // Забираем задание из файла
    const task = await data.split('\n')[count];

    // Превращаем строку с заданием в массив для удобства
    const taskArray = task.split("");

    // Захватываем каждую ячейку
    const blocks = document.querySelectorAll(".small_block");
    
    // Ввести в каждую ячейку цифру
    blocks.forEach((block, index=0) => {
        block.textContent = taskArray[index];
    })

    // Счетчик
    count += 1;
    if (count >= 16) alert("Это было последнее задание. Обновите страницу");
    const divCounter = document.querySelector(".counter");
    divCounter.textContent = `Задание №${count}`
}