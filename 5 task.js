function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};


const resultNode = document.querySelector('.j-result');

const btnNode = document.querySelector('.j-btn-request');


function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    localStorage.setItem('images', cards);
    resultNode.innerHTML = cards;
}


btnNode.addEventListener('click', () => {
    let page = +document.querySelector('#number1').value;
    let limit = +document.querySelector('#number2').value;
    // Ошибка в условиях, снова использовано логическое И вместо ИЛИ. Также перегруппировала условия, чтобы обработка значений была более оптимальной
    if ((page > 10 || page < 1 || typeof page != 'number') && (limit > 10 || limit < 1 || typeof limit != 'number')) {
        resultNode.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (page > 10 || page < 1 || typeof page != 'number') { // Переменная value нигде не объявлена, нужно использовать те переменные, что уже есть: page или limit
        resultNode.innerText = 'Номер страницы вне диапазона от 1 до 10';
    } else if (limit > 10 || limit < 1 || typeof limit != 'number') {
        resultNode.innerText = 'Лимит вне диапазона от 1 до 10';
    } else {
        // Значения неверно подставляются в URL. Лучше всего использовать для этого шаблонную строку
        let myUrl = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
        useRequest(myUrl, displayResult)
    }

})

if (localStorage.getItem('images')) {
    resultNode.innerHTML = localStorage.getItem('images');
}

// const jsonString = `
// {"id":"",
// "author":"",
// "width":,
// "height":,
// "url":"",
// "download_url":""
  
// }
// `;
// localStorage.setItem('myJSON', jsonString);
// Сохранение в localStorage сделано неправильно. Сейчас вы сохраняете туда json-строку, которая не содержит никаких данных. Выше добавила верный вариант сохранения данных в localStorage