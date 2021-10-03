// Practive creating an object

const superman = {
    name: 'Superman',
    realName: 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

for(const [key,value] of Object.entries(superman)) {console.log(`${key}: ${value}`);}