//objects

//create new object

 const company = Symbol("company"); // declare new symbol to acces as a key

const profile = {
name : "Joemon",
[company] : "NTT Data",
"Email" : "joemon.kishor@outlook.com",
getSummary : function(){
return `${this.name} is working in ${this[company]}. Contact :${this.Email}`
}

};

//Access properties

console.log(profile.name);
console.log(profile["Email"]);  //javascript defaults "key" : "value"
console.log(profile[company]); //important syntax to access Symbol

//updating properties

profile.Email = "joemon.kishor@gmail.com";


//add new property

profile.location = "kochi";



//delete property

delete profile.location;



//freeze the object

Object.freeze(profile)

// delete profile.name; // object is freezed and deletion is unexecuted


//summary

console.log(profile.getSummary());

//combining two different objects

const setA = { a: 10, b: 20, c: 30 };
const setB = { d: 40, e: 50, f: 60 };

console.log({...setA,...setB}) //spread operator
console.log(Object.assign({},setA,setB)); //assigns two distinct objects to a new empty object