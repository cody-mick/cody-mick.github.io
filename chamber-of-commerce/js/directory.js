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

            card.appendChild(businessName);
            card.appendChild(logo);
            
            let directory = document.querySelector('.directory');
            directory.appendChild(card);
        }
    })
