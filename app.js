const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Plank',
        year: 1858,
        passed: 1947
    },
];


const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwing', 'Begin, Manachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Guiron, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Berngman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhart, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Franck', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Affichage de tous les inventeurs
inventors.forEach(inventor => {
    const inventorLi = document.createElement("li");
    inventorLi.textContent = inventor.first + " " + inventor.last + ", born in " + inventor.year + ", died in " + inventor.passed;
    document.querySelector(".inventors").appendChild(inventorLi);
})


// Affichage de toutes les personnes
const peopleElt = document.querySelector(".people");
const peopleList = document.createElement("p");
for (let i = 0; i < people.length; i++) {
    peopleList.textContent += people[i] + " - ";
}
peopleElt.appendChild(peopleList);


// 1. Filter the list of inverstors for those who were born in the 1500's

const bornIn1500 = document.querySelector(".bornIn1500");
birthDateCheck(inventors, 1500, 1600, bornIn1500);

function birthDateCheck(array, yearMin, yearMax, parentElt) {
    const checking = array.filter(dateCheck);

    function dateCheck(individual) {
        return individual.year >= yearMin && individual.year < yearMax;
    }
    checking.forEach(index => {
        const indexValid = document.createElement("li");
        indexValid.textContent = index.first + " " + index.last + ", born in " + index.year + ", died in " + index.passed;
        parentElt.appendChild(indexValid);
    })
}

// 2. Give us an array of the inventors birth date anf passed date











































// 3. Sort the inventors by birthdat, oldest to youngest

// 4. How many years did all the inventors live ?

// 5. Sort the inventors by years lived

// 6. Create a liste of Boulevards in Paris that contains 'de' anywhere in the name :
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort the people alphabetically by last name

// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'wallk', 'car', 'van', 'car', 'truck', 'pogostick'];