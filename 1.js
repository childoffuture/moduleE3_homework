// Повторно загружаю задание 7 из предыдущего модуля,
// тк на мой взгляд, решение соответствует заданию 1 (код изначально был реализован в виде функций)
let list = [1, 'ddd', null, 4, 5, 6, 7, 0, 0, 8];

function checkEven(result, item, index, array)
{
    if (typeof(item) == "number" && item !== 0 && item % 2 === 0)
    {
      result++;
    }
    
    return result;
}

function checkNotEven(result, item, index, array) {
    if (typeof(item) == "number" && item !== 0 && item % 2 !== 0)
    {
      result++;
    }
    
    return result;
}

function checkZero(result, item, index, array) {
    return (typeof(item) == "number" && item === 0) ? ++result : result
}

// Подсчет четных чисел
console.log(list.reduce(checkEven, 0))
// Подсчет нечетных чисел
console.log(list.reduce(checkNotEven, 0))
// Подсчет нулей
console.log(list.reduce(checkZero, 0))