
//  FUNCTION (FIRST CLASS)

// node.org


function hello() {
    // logic goes here
    console.log("mirst function", " hello world ")
}

// calling a fun
hello()


function add() {
    console.log("1+ 2 ", 1+2)
}

add()

// parameter functions
function add_2(num_1, num_2) {
    console.log("the sum is ", num_1+num_2)
}
add_2(20, 4)



// login
// 1. check name exists
// bool -> if name exists - true/false

function name_exists(name) {
   return name
}

let retrn = name_exists("efen");
console.log("name_Exisst return ", retrn, "then also if yusuf ", name_exists("yusuf") );



// 
// funct
function function_name() {
    // logic here
}
function function_x() {
    // logic here
    console.log("im also a function")
}

function_x()

// ARROW FUNCTIONS
// Arrow Functions i.e (...args)=> {// do stuff  //If the arg is one we can do without brackets.}
let function_x_china = (country)=> {
    // logc here
    console.log("function_x_china: im also a function ", "made in ", country);
}
function_x_china("kenya")


//
let print_it = (msg)=> {
    console.log("msg")
}

// multiply 2 numbers
let multiplier = (num_1, num_2) => {
    let multp = num_1*num_2
    print_it(multp)
}



// MAP FUNCTIONS.
// Work well with lists.
// map function creates a new array with the results of calling a provided function
// every element in the calling array.
var array1 = [1,2,3,4,56];
const map1 = array1.map(x => x*2); // basically loops over every element in the list and multiplies by 2

console.log(map1);

// recommendations
// 1. let function names convey an apparent meaning
// 2. use comments to convey what a function is meant to do
// 3. be consistent with names you give


// control structures
// objects
// arrays

// html
// events & dom


// week 2 --> login

