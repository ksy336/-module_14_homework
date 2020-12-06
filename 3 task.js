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
    let num = document.querySelector('input').value;
    if (num > 10 || num < 1) { // Ошибка в проверке значения. Число не может быть одновременно больше 10 и меньше 1, поэтому в данном случае нужно использовать логичемкое ИЛИ
        return resultNode.innerText = 'число вне диапазона от 1 до 10';
    }
    let myUrl = 'https://picsum.photos/v2/list?limit='  + num;
    useRequest(myUrl, displayResult);
})