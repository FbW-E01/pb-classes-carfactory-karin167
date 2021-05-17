function userCar (make, model, year) {
    this.type = 'car'
    this.make = make
    this.model = model
    this.year = year

}

let car1 = new userCar ('opel','A2',2015);
let car2 = new userCar ('bmw','xxv',2005);
let car3 = new userCar ('oudi','A3',2019);
let car4 = new userCar ('opel','Aj2',2010);
let car5 = new userCar ('mini copper','2-p',2020);
let car6 = new userCar ('opel','App',2005);
let car7 = new userCar ('KIA','A2',2021);
let car8 = new userCar ('mazda','DF300', 2008);
let car9 = new userCar ('fiat','500',2009);
let car10 = new userCar ('smart','g-9',2016);



console.log(car1, car2, car3,car4, car5,car6, car7, car8, car9, car10);


// console.log(userCar('opel','A2',2015 ));







// Here we define the "blueprint" on a User
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// Here, "jack" is an instance of User
// let jack = new User("Jack Kerouac");
// jack.isAdmin = true; // we can change the values
// console.log(jack.name);
// console.log(jack.isAdmin);
// console.log(jack); // notice the slight difference here to object literals!