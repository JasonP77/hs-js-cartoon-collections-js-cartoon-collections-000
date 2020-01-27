function dwarfRollCall(dwarves) {
  let arr = [];
  for(let i = 0; i < dwarves.length; i++){
    arr.push(`${i+1}. ${dwarves[i]} `);
  }
  return arr.join("");
}

function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(newArr => newArr.toUpperCase() + "!");
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    } else {
      return false
    }
  }
}

let newArr = ["Apple", "gouda", "cheddar", "banana"]
function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert", "swisscheese"]
  for(let i= 0; i < cheese.length; i++){
    if(foods.includes(cheese[i])){
      return cheese[i]
    } else {
      return "no cheese!"
    }
  }
}
let words = ["Banana", "Apple", "Ball"]
function wordsWithB(arr){
  
}







