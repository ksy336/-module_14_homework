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



    resultNode.innerHTML = cards;
}


btnNode.addEventListener('click', () => {
    let page = document.querySelector('#number2').value;
    if (page > 10 && page < 1 || typeof value != 'number') {
        return resultNode.innerText = 'Номер страницы вне диапазона от 1 до 10';
    }
    let limit = document.querySelector('#number2').value;
    if (limit > 10 && limit < 1 || typeof value != 'number') {
        return resultNode.innerText = 'Лимит вне диапазона от 1 до 10';
    }
    if (page > 10 && page < 1 || typeof value != 'number' && limit > 10 && limit < 1 || typeof value != 'number') {
        return resultNode.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else {
        let myUrl = 'https://picsum.photos/v2/list?page=&limit=' + page + limit;
        useRequest(myUrl, displayResult)
    }

})

const jsonString = `
{"id":"",
"author":"",
"width":,
"height":,
"url":"",
"download_url":""
  
}
`;
localStorage.setItem('myJSON', jsonString);