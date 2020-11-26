const parser = new DOMParser();
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
const data = parser.parseFromString(xmlString, 'text/xml');
const list = data.list;




const result = {
    list: [
        { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
        { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
    ]
}
console.log('result', result);