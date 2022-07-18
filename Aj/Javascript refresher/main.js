// Var is depreciated but still work
// Only 2 variable declarations
let name = "Max";
const otherName = "Min";

// Arrow Functions 
// Can ommit parameter brace if only 1 parameter
// can ommit return and {} if only one line modification 
const convertToString = (x) => x.toString();

// Export 
/* Old way of exporting values 
export default Person;
export const newVarExport = 5;
*/


// Import 
/* import person from './others.js'
import * as othersInfo from './others.js' */

// Classes
// It can contain variable, functions

class Person {
    constructor() {
        this.name = "Max"
    }
    printName() {
        console.log(this.name)
    }
}

const person = new Person()
person.printName()

module.exports.divya = function (number) {
    return "I will buy more clothes"
}
module.exports.Ajay = "I will not buy more clothes"
module.exports.Vicky = (number) => number * 8962

function royal() {
    return "king of bikes "
}

module.exports.bike = royal


// Spread and rest 
// spread 
const oldArr = [1, 2, 3]
const newArr = [...oldArr, 4, 5]
console.log(newArr)

// rest operator 
const newFuncParameters = (...settings) => console.log(settings)
newFuncParameters(5, 'old', 345, true)
