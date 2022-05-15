'use strict';
let users = [
  {
    id: 1,
    name: 'Samanta',
    surname: 'Vynuogaitė',
    city: 'Kaunas',
    added: new Date('2022 05 13'),
  },
  {
    id: 2,
    name: 'Jurga',
    surname: 'Vyšnaitė',
    city: 'Kaišiadorys',
    added: new Date('2021 07 23'),
  },
  {
    id: 3,
    name: 'Jaunius',
    surname: 'Kopūstaitis',
    city: 'Vilnius',
    added: new Date('2020 09 12'),
  },
  {
    id: 4,
    name: 'Tautvydas',
    surname: 'Samanaitis',
    city: 'Kaunas',
    added: new Date('2022 01 13'),
  },
  {
    id: 5,
    name: 'Gediminas',
    surname: 'Sparnaitis',
    city: 'Biržai',
    added: new Date('2021 05 13'),
  },
];
const tableBodyElement = document.querySelector('tbody');
const addUsersForm = document.querySelector('#addUsers form');
const searchUsersForm = document.querySelector('#searchUsers form');
const searchResultsElement = document.querySelector('#searchResults');
arrangeData();
function arrangeData() {
  let usersElements = '';
  users.forEach((user) => {
    usersElements += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.city}</td>
                <td>${user.added.toLocaleDateString()}</td>
            </tr>
        `;
  });
  tableBodyElement.innerHTML = usersElements;
}
addUsersForm.addEventListener('submit', addNewElement);
function addNewElement(event) {
  event.preventDefault();
  const name = addUsersForm.querySelector('#vardas');
  // const name = document.querySelector('#vardas');
  const surname = addUsersForm.querySelector('#pavarde');
  const city = addUsersForm.querySelector('#miestas');
  const newId = getNewId();
  const newDate = new Date();
  users.push({
    id: newId,
    name: name.value,
    surname: surname.value,
    city: city.value,
    added: newDate,
  });
  arrangeData();
  name.value = '';
  surname.value = '';
  city.value = '';
}
function getNewId() {
  const idsArray = users.map((user) => user.id);
  return Math.max(...idsArray) + 1;
}
searchUsersForm.addEventListener('submit', searchUsers);
function searchUsers(event) {
  event.preventDefault();
  const searchValue = searchUsersForm.querySelector('#paieska');
  if (searchValue.value) {
    const value = searchValue.value;
    const valueInBold = `<b>${value}</b>`;
    let searchResult = users.filter(
      (user) => user.name.includes(value) || user.surname.includes(value)
    );
    let searchElement = '';
    if (searchResult.length > 0) {
      searchElement += `<div><span>Rezultatai:</span></div>`;
      searchResult.forEach((item) => {
        searchElement += `<div>${item.id} ${item.name.replace(value, valueInBold)} ${item.surname.replace(value, valueInBold)} ${
          item.city
        } ${item.added.toLocaleDateString()} </div>`;
      });
    } else {
      searchElement = '<div>Rezultatų nėra</div>';
    }
    searchResultsElement.innerHTML = searchElement;
    searchValue.value = '';
  }
}