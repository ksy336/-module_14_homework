
const btn = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');

const useRequest = (width, height) => {
    // В запрос нужно подставлять значения, введенные пользователем
    return fetch (`https://picsum.photos/${width}/${height}`) 
        // Нужно добавить корректный вывод результата в виде картинки
        .then(response => {
            resultNode.innerHTML = `<img src="${response.url}" />`;
        })
        .catch(() => {
            console.log('error')
        })
}

// В данном случае нет необходимости использовать в качестве обработчика события асинхронную функцию. fetch сам по себе является асинхронным, т.е. отправляет запрос асинхронно по умолчанию.
btn.addEventListener('click', () => {
    // Проверять нужно значения обоих инпутов, поэтому для значения каждого инпута нужна своя отдельная переменная. Также, поскольку мы знаем, что работаем с числами, нужно использовать унарный плюс, чтобы привести значения к числовому формату
    let value1 = +document.querySelector('.number1').value;
    let value2 = +document.querySelector('.number2').value;
    // Здесь в условии тоже нужно использовать логическое ИЛИ вместо И
    if (value1 > 300 || value1 < 100 || typeof value1 != 'number' || value2 > 300 || value2 < 100 || typeof value2 != 'number') {
        return resultNode.innerText = 'одно из чисел вне диапазона от 100 до 300';
    }
    useRequest(value1, value2);
})