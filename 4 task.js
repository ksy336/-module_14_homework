
const btn = document.querySelector('.j-btn-request');

//const resultNode = //document.querySelector('.j-result');

const useRequest = () => {
    return fetch ('https://picsum.photos/200/300')
        .then(( response) => {
            console.log('response', response);
            return response.json();
        })
        .then((json) =>{
            return json;
        })
        .catch(() => {
            console.log('error')
        })
}


btn.addEventListener('click', async () => {
    let nums = document.querySelector('input').value;
    if (nums > 300 && nums < 100 || typeof value != 'number') {
        return resultNode.innerText = 'одно из чисел вне диапазона от 100 до 300';
    }
    let myUrl = 'https://picsum.photos/width=/height='  + nums;
    const requestResult = await useRequest();
    console.log( 'requestResult', requestResult);
})