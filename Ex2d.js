//  (d) Write a function that multiply each number under 70 by 2 in the following array. Hint: use a .map function const ages = [25, 31, 42, 77];
//  shift+alt+f = indentation
// const myMultiply = () => {


const ages = [25, 31, 42, 77];

let myAges = ages.map((element) => { //ages.map for mapping the elements in the array
        if (element < 70) {
            return element * 2;  
        };
            return element;        
    }
)
console.log(myAges);