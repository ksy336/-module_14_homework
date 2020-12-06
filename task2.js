const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const data = JSON.parse(jsonString);
console.log(data);
// Всё, что ниже этой строчки - можно не писать :) JSON.parse сразу возвращает валидный JS-объект, который и является ответом на задачу

// const list = data.list;

// const result = {
//     list: [
//         { name: 'Petr', age: 20, prof: 'mechanic' },
//         { name: 'Vova', age: 60, prof: 'pilot' },
//     ]
// };

// console.log('result', result);