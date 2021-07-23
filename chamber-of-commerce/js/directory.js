let companyData = "js/local-business.json";
fetch(companyData)
    .then((response) => response.json())
    .then((businesses) => {
        // Verify the retrieval of the data
        console.log(businesses);

        // Loop through the data and create the business cards
        for (let i = 0; i < 9; i++) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            let businessName = document.createElement('div');
            businessName.setAttribute('class', 'bus-name');
            businessName.textContent = businesses.members[i].business;

            let logo = document.createElement('img');
            logo.setAttribute('src', businesses.members[i].logo);
            logo.setAttribute('alt', businesses.members[i].business);
            logo.setAttribute('class', 'card-logo');

            let phone  = document.createElement('div');
            phone.setAttribute('class', 'phone-num');
            phone.textContent = businesses.members[i].phone;

            let website = document.createElement('a');
            website.setAttribute('class', 'web-link');
            website.setAttribute('href', businesses.members[i].website);
            website.setAttribute('target', 'blank');
            website.innerHTML = "Check Us Out!";

            card.appendChild(businessName);
            card.appendChild(logo);
            card.appendChild(phone);
            card.appendChild(website);

            let directory = document.querySelector('.directory');
            directory.appendChild(card);
        }
    })

let gridButton = document.querySelector('.grid-button');
let listButton = document.querySelector('.list-button');
let directory = document.querySelector('.directory');

gridButton.addEventListener('click', () => {
    directory.setAttribute('class', 'directory-grid');
});

listButton.addEventListener('click', () => {
    directory.setAttribute('class', 'directory');
});