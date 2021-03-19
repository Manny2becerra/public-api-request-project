// Search bar Elements and attributes
const searchDiv = document.getElementsByClassName('search-container')[0];
const searchForm = document.createElement('form');
const searchBar = document.createElement('input');
const searchButton = document.createElement('button');
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
searchButton.innerHTML = '&#x1F50D;';
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
     const profiles = data.results.map(person => {
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
                    city.textContent = `${person.location.city}, ${person.location.state}`;

        // elements that will be added when clicked 
           
            //creating new elements for modal
                const hr = document.createElement('hr');
                const phone = document.createElement('p');
                const address = document.createElement('p');
                const Birthday = document.createElement('p');

            //adding text content to elements
                const bdayFormat = person.dob.date;
                const regex =/^(\d{4})-(\d{2})-(\d{2})(.+)/;
                const correctBday = bdayFormat.replace(regex, '$2/$3/$1');
                const phoneFormat = person.phone;
                const regPhone1 = /(\d)/
                const plainNumber = phoneFormat.replace(regPhone1, '$1');
                const regexPhone = /(\d{3})(\d{3})(\d{4})/;
                const correctPhone = plainNumber.replace(regexPhone, '($1)-$2-$3');
                phone.textContent = correctPhone;
                address.textContent = `${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.postcode}`;
                Birthday.textContent = `Birthday: ${correctBday}`;

            //adding class Name to elements
                phone.className = 'modal-text';
                address.className = 'modal-text';
                Birthday.className = 'modal-text';

            // making display invisible until clicked
                hr.style.display = 'none';
                phone.style.display = 'none';
                address.style.display = 'none';
                Birthday.style.display = 'none';

        // append all elements
        gallery.appendChild(divCard);
        divCard.appendChild(imgDiv);
        divCard.appendChild(infoDiv);
        imgDiv.appendChild(img);
        infoDiv.appendChild(name);
        infoDiv.appendChild(email);
        infoDiv.appendChild(city);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(address);
        infoDiv.appendChild(Birthday);
        infoDiv.insertBefore(hr, phone);
    });
}

fetchEmployees();

const gallery = document.getElementById('gallery');

gallery.addEventListener('click', zoomProfile);


//zooms in on clicked profile and adds more information
function zoomProfile(event) {
    console.log(event.target.parentNode.parentNode);
    console.log(event.target);
    if (event.target.className === 'card') {
        //selecting all elements needed to be changed
        const div = event.target;
        const modalDiv = div.querySelector('div');
        const modalInfoContainer = div.querySelector('.card-info-container');
        const profilePicture = div.querySelector('.card-img');
        const name = div.querySelector('.card-name');
        const email = div.querySelector('.card-text');
        const city = div.querySelectorAll('p')[1];
        const hr = modalInfoContainer.querySelector('hr');
        const pTags = modalInfoContainer.querySelectorAll('.modal-text');

        //elements that need to be created an added
        const closeBtn = document.createElement('button');
        const strongTag = document.createElement('strong');

        // changing existing elements attributes and moving them around
        div.className = 'modal-container';
        modalDiv.className = 'modal';
        modalInfoContainer.className = 'modal-info-container';
        profilePicture.className = 'modal-img';
        name.className = 'modal-name cap';
        email.className = 'modal-text';
        city.className = 'modal-text cap';
        hr.style.display = 'block';
        for (let i = 0; i < pTags.length; i++) {
            pTags[i].style.display = 'block';
        }
        modalDiv.removeChild(profilePicture);
        modalInfoContainer.insertBefore(profilePicture, name);
        modalDiv.appendChild(modalInfoContainer);
        closeBtn.appendChild(strongTag);
        modalDiv.insertBefore(closeBtn, modalInfoContainer);
        //created elements attributes
        closeBtn.type = 'button';
        closeBtn.id = 'modal-close-btn';
        closeBtn.className = 'modal-close-btn';
        strongTag.textContent = 'X';
        

        //Fetch new added information and add it as the text content to new elements

        
    } else if (event.target.parentNode.className === 'card'){
        //selecting all elements needed to be changed
        const div = event.target.parentNode;
        const modalDiv = div.querySelector('div');
        const modalInfoContainer = div.querySelector('.card-info-container');
        const profilePicture = div.querySelector('.card-img');
        const name = div.querySelector('.card-name');
        const email = div.querySelector('.card-text');
        const city = div.querySelectorAll('p')[1];
        const hr = modalInfoContainer.querySelector('hr');
        const pTags = modalInfoContainer.querySelectorAll('.modal-text');

        //elements that need to be created an added
        const closeBtn = document.createElement('button');
        const strongTag = document.createElement('strong');

        // changing existing elements attributes and moving them around
        div.className = 'modal-container';
        modalDiv.className = 'modal';
        modalInfoContainer.className = 'modal-info-container';
        profilePicture.className = 'modal-img';
        name.className = 'modal-name cap';
        email.className = 'modal-text';
        city.className = 'modal-text cap';
        hr.style.display = 'block';
        for (let i = 0; i < pTags.length; i++) {
            pTags[i].style.display = 'block';
        }
        modalDiv.removeChild(profilePicture);
        modalInfoContainer.insertBefore(profilePicture, name);
        modalDiv.appendChild(modalInfoContainer);
        closeBtn.appendChild(strongTag);
        modalDiv.insertBefore(closeBtn, modalInfoContainer);
        //created elements attributes
        closeBtn.type = 'button';
        closeBtn.id = 'modal-close-btn';
        closeBtn.className = 'modal-close-btn';
        strongTag.textContent = 'X';
        

        //Fetch new added information and add it as the text content to the new element
    } else if (event.target.parentNode.parentNode.className === 'card') {
        //selecting all elements needed to be changed
        const div = event.target.parentNode.parentNode;
        const modalDiv = div.querySelector('div');
        const modalInfoContainer = div.querySelector('.card-info-container');
        const profilePicture = div.querySelector('.card-img');
        const name = div.querySelector('.card-name');
        const email = div.querySelector('.card-text');
        const city = div.querySelectorAll('p')[1];
        const hr = modalInfoContainer.querySelector('hr');
        const pTags = modalInfoContainer.querySelectorAll('.modal-text');

        //elements that need to be created an added
        const closeBtn = document.createElement('button');
        const strongTag = document.createElement('strong');

        // changing existing elements attributes and moving them around
        div.className = 'modal-container';
        modalDiv.className = 'modal';
        modalInfoContainer.className = 'modal-info-container';
        profilePicture.className = 'modal-img';
        name.className = 'modal-name cap';
        email.className = 'modal-text';
        city.className = 'modal-text cap';
        hr.style.display = 'block';
        for (let i = 0; i < pTags.length; i++) {
            pTags[i].style.display = 'block';
        }
        modalDiv.removeChild(profilePicture);
        modalInfoContainer.insertBefore(profilePicture, name);
        modalDiv.appendChild(modalInfoContainer);
        closeBtn.appendChild(strongTag);
        modalDiv.insertBefore(closeBtn, modalInfoContainer);
        //created elements attributes
        closeBtn.type = 'button';
        closeBtn.id = 'modal-close-btn';
        closeBtn.className = 'modal-close-btn';
        strongTag.textContent = 'X';
        

        //Fetch new added information and add it as the text content to the new element
    }else {
        console.log('false');
    }
}


// adding an event listener to the exit button for modal
document.addEventListener('click', exitModalView);



//handles the exit from the zoomed profile view

function exitModalView(event) {
    if(event.target.textContent === 'X') {
        //select all modal elements
            const div = document.querySelector('.modal-container');
            const modalDiv = div.querySelector('.modal');
            const modalInfoContainer = div.querySelector('.modal-info-container');
            const profilePicture = div.querySelector('.modal-img');
            const name = div.querySelector('.modal-name');
            const email = div.querySelector('.modal-text');
            const city = div.querySelectorAll('p')[1];
            const hr = modalInfoContainer.querySelector('hr');
            const pTags = modalInfoContainer.querySelectorAll('.modal-text');
            const closeBtn = document.getElementById('modal-close-btn');

        // revert elements to normal format
            div.className = 'card';
            modalDiv.className = 'card-img-container';
            modalInfoContainer.className = 'card-info-container';
            profilePicture.className = 'card-img';
            name.className = 'card-name';
            email.className = 'card-text';
            city.className = 'card-text';
            hr.style.display = 'none';
            for (let i = 2; i < pTags.length; i++) {
                pTags[i].style.display = 'none';
            }

        //organizing elements into correct format
            modalDiv.removeChild(modalInfoContainer);
            div.appendChild(modalInfoContainer);

            modalInfoContainer.removeChild(profilePicture);
            modalDiv.appendChild(profilePicture);
            modalDiv.removeChild(closeBtn);
            



    }
}


