// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// dionsaur object

let dinosaur = {

  tyrannosaurus :{
  type : 'tyrannosaurus', 
  diet : 'carnivorous', 
  weight : '7000 kg',
  length :  '12 m', 
  period :' Late Cretaceious',
  roar: function() { let x = 'RAWERSRARARWERSARARARRRR!'; return x;}  },

  velociraptor :{
    type: 'velociraptor',
    diet: 'carnivorous',
    weight: '15 kg',
    length: '1.8 m', 
    period: 'Late Cretaceious',
    

  },

  stegosaurus :{
    type: 'stegosaurus', 
    diet: 'herbivorous',
    weight: '2000 kg',
    length: '9 m',
    period: 'Late Jurassic',
    

  }
}

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(dinosaur.tyrannosaurus.weight);
// What was the diet of a velociraptor?
console.log(dinosaur.velociraptor.diet);
// How long was a stegosaurus?
console.log(dinosaur.stegosaurus.length);
// What time period did tyrannosaurus live in?
console.log(dinosaur.tyrannosaurus.period);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(dinosaur.tyrannosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests without using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array. 
Once you have the new array created, sort the universities alphabetically and log the result. */

const universities = [];
for(let i = 0; i < graduates.length ; i++){

  universities.push(graduates[i].university);
console.log(universities);
}



universities.sort();

console.log(universities);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 
The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com
Log the result of your new array. */
const contactInfo = [];

function callCard (array){
  for(let i = 0; i < graduates.length; i++){
  let mail = graduates[i].email;
  let first = graduates[i].first_name;

  contactInfo.push(`${first} : ${mail}`);

}
}

callCard(graduates);

console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */



function filterSchools (array) {
  const uni = [];
for(i = 0; i < array.length; i++){
  let finder = 'Uni';
  let schools = array[i].university;
 if(schools.includes(finder)){

  uni.push(schools);
 }
 
}
return uni;
}
console.log(filterSchools(graduates));
//console.log(uni);


// ==== Array Methods ====

// Given this zoo data from around the United States, follow the instructions below

zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

// The zoos need a list of all their animal's names converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.
//const lowerCase = [];


// function inLowerCase(array){
//   this.animal_name = animal_name;
//   //var grabName = animal_name[0]; //grab first names
//   //console.log(grabName);
//   var result = array.map(grabName => grabName[0].toLowerCase()); // change to lowercase
// console.log(result);
 

// return result; //returning the converted first_name


// }

const lowerCase = zooAnimals.map(item => item.animal_name.toLowerCase());

console.log(lowerCase);




// The zoos need to know their total animal population across the United States.  Add up all the population numbers from all the zoos using the .reduce() method.
const populationTotal = [];

//push in the numbers
function push(x){
populationTotal.push(x.population);


}

zooAnimals.forEach(push); //loop the push through the whole object

let total = populationTotal.reduce((start, finish) => start + finish); //add up all values
console.log(total);






console.log(populationTotal);
