const newTaskButton = document.querySelector('.newTask');
newTaskButton.addEventListener("click", () => {
    getNewTask()
})

function getNewTask() {
    // Берем задание с файла pazzles.txt
    const task = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
    // Превращаем строку с заданием в массив для удобства
    const taskArray = task.split("");

    // Захватываем каждую ячейку
    const blocks = document.querySelectorAll(".small_block");
    
    // Ввести в каждую ячейку цифру
    blocks.forEach((block, index) => {
        block.textContent = taskArray[index];
    })
}