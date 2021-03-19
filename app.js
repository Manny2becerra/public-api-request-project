// Search bar Elements and attributes
const searchDiv = document.getElementsByClassName('search-container')[0];
const searchForm = document.createElement('form');
const searchBar = document.createElement('input');
const searchButton = document.createElement('input');
searchDiv.appendChild(searchForm);
searchForm.appendChild(searchBar);
searchForm.appendChild(searchButton);
searchForm.action = '#';
searchForm.method = 'get';
searchBar.type = 'search';
searchBar.id = 'search-input';
searchBar.className = 'search-input';
searchBar.placeholder = 'Search...';
searchButton.type = 'submit';
searchButton.value = '&#x1F50D;';
searchButton.id = 'search-submit';
searchButton.className = 'search-submit';

//fetching data 
function fetchEmployees() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => console.log(data));
}

fetchEmployees();
