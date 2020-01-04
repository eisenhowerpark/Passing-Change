//pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);
//a is equal to 1 because a and b have different spots in memory. What happens inside the Change function doesn't affect a.
//Passing a into the Change function does not affect a's primitive value.

//pass by reference
function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
//When we call changeObj(), d points to the same spot in memory as c, because c is passed by reference.
//Whatever happens to d happens to c because they're the same object in memory.