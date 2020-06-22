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
console.log("Inventors");
console.table(inventors);



const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwing', 'Begin, Manachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Guiron, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Berngman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhart, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Franck', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
console.log("People");
console.table(people);



console.log("1. Filter the list of inverstors for those who were born in the 1500's using array.prototype.filter()");
const fifteen = inventors.filter(index => index.year >= 1500 && index.year < 1600);
console.table(fifteen);



console.log("2. Give us an array of the inventors first and last name using array.prototype.map()");
const fullNames = inventors.map(index => `${index.first} ${index.last}`);
console.table(fullNames);



console.log("3. Sort the inventors by birthdate, oldest to youngest using array.prototype.sort()");
const birthDates = inventors.sort((a, b) => a.year - b.year);
console.table(birthDates);



console.log("4. Count how many years did all the inventors live using array.prototype.reduce()");
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);



console.log("5. Sort the inventors by years lived");
const oldest = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.table(oldest);



console.log("6. Sort the people alphabetically by last name ursing array.prototype.sort()");
console.table(people.sort((a, b) => {
    return a - b;
}));



const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'wallk', 'car', 'van', 'car', 'truck', 'pogostick'];
console.table(data);



const instance = data.reduce((total, n) => {
    if (!total[n]) {
        total[n] = 0;
    }
    total[n]++;
    return total;
}, {});

console.table(instance);