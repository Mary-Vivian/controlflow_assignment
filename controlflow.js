
// Write a program that takes in an array of numbers and 
// consoles the first four items multiplied by itself  and the last two added by 10. 
// Return the array with the new values
function numbersarray(numbers){
    let elemnts1=numbers.slice(0,4).map(elemnts1=>elemnts1*elemnts1)
    console.log((elemnts1))
    let elements2=numbers.slice(-2).map(elements2=>elements2+10)
    console.log((elements2))
    let elementsjoined=elemnts1.concat(elements2)
    console.log((elementsjoined))

}
numbersarray([9,8,7,6,3,4])

// Write a program that takes in the following array and use a while loop to 
// iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum=[1,2,3,4,5,6,7,8,9];
let i= 0;

while (i<5){
arrNum +=i+ " ";
    i++;
}
console.log((arrNum))
// Write a function that takes in a an array of 
// strings and use a continue statement when the item is at the second index:  
// let fruits= ['apple','plum','banana','strawberries','kiwi']
 function arrayOffruits(fruits){
 for (let j=0; j<fruits.length;j++){
    if(j===1) {
        continue;
    }
 }
 console.log(fruits)
}
 arrayOffruits(["apple","plum","banana","strawberries","kiwi"])
//  Write a function that accepts an array of strings and console.logs 
// each element using a for loop.
function stringsArray(Cities){
    for (let i=0;i<=Cities.length; i++){
      console.log((Cities[i]));

    }
}
stringsArray(["Nairobi","Thika","Eldoret","Mombasa"])

// Write a JavaScript function that takes a string as input and 
// reverses it using a while loop. The function should return the reversed string. 
function stringreverse(name){
    let i=name.length;
    while( i--){
         console.log((name[i].concat("")))

    }
    

}
stringreverse("Vivian")




