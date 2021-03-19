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
    fetch('https://randomuser.me/api/?results=12')
        .then(response => response.json())
        .then(data => generateHTML(data));
}

//generates html for each profile in required format
function generateHTML(data) {
    //create & append elements
     data.results.map(person => {
        //creating element attributes and text Content 
        const gallery = document.getElementById('gallery');

            const divCard = document.createElement('div');
            divCard.className = 'card';

                const imgDiv = document.createElement('div');
                imgDiv.className = 'card-img-container';
                    const img = document.createElement('img');
                    img.className = 'card-img';
                    img.src = `${person.picture.thumbnail}`;
                    img.alt = 'profile picture';

                const infoDiv = document.createElement('div');
                infoDiv.className = 'card-info-container';

                    const name = document.createElement('h3');
                    name.className = 'card-name';
                    name.id = 'name';
                    name.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;

                    const email = document.createElement('p');
                    email.className = 'card-text';
                    email.textContent = `${person.email}`;

                    const city = document.createElement('p');
                    city.className = 'card-text';
                    city.textContent = `${person.location.city}`;
        // append all elements
        gallery.appendChild(divCard);
        divCard.appendChild(imgDiv);
        divCard.appendChild(infoDiv);
        imgDiv.appendChild(img);
        infoDiv.appendChild(name);
        infoDiv.appendChild(email);
        infoDiv.appendChild(city);
    });
    
}
fetchEmployees();
