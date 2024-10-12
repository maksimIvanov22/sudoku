/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

 const fs = require('fs');
 const puzzle = function getSudoku(n) {
   const sudokuList = fs.readFileSync(__dirname + '/puzzles.txt', 'utf8').split('\n');
   const chooseSudoku = sudokuList[n].match(/.{9}/g);
   const formattedBoard = [];
   chooseSudoku.forEach(element => {
     formattedBoard.push(element.split(''));
   });
   return formattedBoard;
 };

 console.log(puzzle(0))
const board = puzzle(0);


function solve(boardString) {
  
  //  функция проверяем может ли число вставлено в опреденную позицию
  const canPlace = (num, i, j) => {
    // проверяем ряду
    for (let col = 0; col < 9; col++) {
        if (board[i][col] === num) {
            return false;
        }
    }
    
    // проверяем по колонке
    for (let row = 0; row < 9; row++) {
        if (board[row][j] === num) {
            return false;
        }
    }
    
    // проверяем блок 3 на 3 
    const startRow = Math.floor(i / 3) * 3;
    const startCol = Math.floor(j / 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            if (board[row][col] === num) {
                return false;
            }
        }
    }
    
    return true;
}

 // Функция решает судоку используя backtracking
 const solve = () => {
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (board[i][j] === '-') { // ищет пустую строку
              for (let num = 1; num <= 9; num++) {  
                  if (canPlace(`${num}`, i, j)) { // проверит может ли число быть вставлено
                      board[i][j] = `${num}`; 
                      
                      if (solve()) { // с помощью рекурсии решает остальную часть 
                          return true;
                      }
                      
                      board[i][j] = '-'; // Backtrack: под опреденной ячейкой
                  }
              }
              return false; // не валидное число, backtrack
          }
      }
  }
  return true; // все числа добавлены 
};

solve();

return board; 
}

const puzzleSolved = solve(board); 

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') return false;
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  return board.map(row => row.join(' ').replace(/,/g,' ')).join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
