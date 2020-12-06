const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// const data = parser.parseFromString(xmlString, 'text/xml');
// const list = data.list;

// const result = {
//     list: [
//         { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//         { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
// }
// console.log('result', result);

// Задание выполнено неверно, т.к. вы не считываете значения из XML-строки, а записываете их вручную. Ниже написала верный вариант решения

let parser = new DOMParser();
let result = {
  list: []
};

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

students.forEach(node => {
  let student = {
    name: `${node.querySelector("first").textContent} ${node.querySelector("second").textContent}`,
    age: node.querySelector("age").textContent,
    prof: node.querySelector("prof").textContent,
    lang: node.querySelector("name").getAttribute("lang")
  }
  result.list.push(student);
});

console.log(result);