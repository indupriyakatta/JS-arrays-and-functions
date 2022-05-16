const companies =  [
    {name: "Company One" , category: "Finanace" , start :1981, end:2003},
    {name: "Company Two" , category: "Retail" , start :1992, end:2008},
    {name: "Company Three" , category: "Auto" , start :1999, end:2007},
    {name: "Company Four" , category: "Retail" , start :1989, end:2010},
    {name: "Company Five" , category: "Technology" , start :2009, end:2014},
    {name: "Company Six" , category: "Finanace" , start :1987, end:2010},
    {name: "Company Seven" , category: "Auto" , start :1986, end:1996},
    {name: "Company Eight" , category: "Technology" , start :2011, end:2016},
    {name: "Company Nine" , category: "Retail" , start :1981, end:1989},

];
const ages = [33, 12, 20, 16 , 5, 54, 21 , 44 , 61, 13, 15, 45, 25 , 64, 32];
//STANDARD LOOP
// for(let i = 0; i < companies.length; i++)
// {
//     console.log(companies[i]);
// }

//FOREACH(LOOP THROGH AN ARRAY& DOESNT RETURN ANYTHING)

// companies.forEach(function(company){
//     console.log(company.name);
// });


//FILTER(define an empty array and then loop)

//forloop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
// if(ages[i] >= 21){
//     canDrink.push(ages[i]);
// }
// }

//by filter 
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

//by  es6 arrow function
//const canDrink = ages.filter(age => age >= 21);

//console.log(canDrink);

//filter retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

//by arrow function
// const retailCompanies = companies.filter(company => company.category ==='Retail');
// console.log(retailCompanies);

//get eightiesCompanies 
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);

// //get companies that lasted ten years or more
// const lastedTenyears = companies.filter(company => (company.end - company.start ) > 10);
// console.log(lastedTenyears);


//MAP
//create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function(company){
//     return `${company.name}  [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

//using es6 arrow
// const testMap = companies.map(company => `${company.name}  [${company.start} - ${company.end}]`);

// console.log(testMap);

// const ageSquare = ages.map(age => Math.sqrt(age));

// const ageTimestwo= ages.map(age => age * 2);
//console.log(ageTimestwo);

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

// console.log(ageMap);

//SORT
//sort companies by start year
// const sortedcompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedcompanies);

//using es6 arrow function
// const sortedcompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedcompanies);

//SORT AGES
// const sortAges = ages.sort((a ,b) => a-b);
// console.log(sortAges);


//REDUCE
// let ageSum = 0;
// for(i=0 ; i < ages.length; i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

//total age
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// console.log(ageSum);

//using es6 arrow function
// const ageSum = ages.reduce((total , age) =>total + age , 0 );
// console.log(ageSum);

//get total years for all companies
// const totalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// } ,0);
// console.log(totalYears);

//using arrow function
//  const totalYears = companies.reduce((total , company) => total + (company.end - company.start) , 0);
// // console.log(totalYears);


// //combined method
//  const combined = ages
//  .map(age => age *2)
//  .filter(age => age >= 40)
//  .sort((a,b) => a - b)
//  .reduce((a,b) => a + b ,0);

//  console.log(combined);