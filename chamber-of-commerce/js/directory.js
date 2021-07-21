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
            card.textContent = businesses.members[i].business;
            
            let directory = document.querySelector('.directory');
            directory.appendChild(card);
        }
    })
