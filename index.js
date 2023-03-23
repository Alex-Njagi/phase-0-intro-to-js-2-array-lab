// Write your solution here!
let cats = [`Milo`, `Otis`, `Garfield`];
//--------------------------------------------------------------------------------
function destructivelyAppendCat(cats){
    return cats.splice([3],[0],`Ralph`);
}
destructivelyAppendCat(cats=cats);
cats
//---------------------------------------------------------------------------------
function destructivelyPrependCat(cats){
    return cats.splice([0],[0],`Spencer`);
}
destructivelyPrependCat(cats=cats);
cats
//---------------------------------------------------------------------------------
function destructivelyRemoveLastCat() {
    return cats.splice([4],[1]);
}
destructivelyRemoveLastCat();
cats
//----------------------------------------------------------------------------------
function destructivelyRemoveFirstCat() {
    return cats.splice([0],[1]);
}
destructivelyRemoveFirstCat();
cats
//----------------------------------------------------------------------------------
const prependedCat = [...cats];
function prependCat() {
    return prependedCat.unshift(`Spencer`)
}
prependCat(prependedCat);
cats
prependedCat
//----------------------------------------------------------------------------------
const appendedCat = [...cats];
function appendCat() {
    return appendedCat.push(`Alison`)
}
appendCat(appendedCat);
cats
appendedCat
//----------------------------------------------------------------------------------
const removedLastCat = [...cats];
function removeLastCat() {
    return removedLastCat.pop()
}
removeLastCat(removedLastCat);
cats
removedLastCat
//----------------------------------------------------------------------------------
const removedFirstCat = [...cats];
function removeFirstCat() {
    return removedFirstCat.shift();
}
removeFirstCat(removedFirstCat);
cats
removedFirstCat