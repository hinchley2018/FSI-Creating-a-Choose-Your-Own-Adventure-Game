//Your Code here

console.log("hello from script")

var answer = window.prompt("left or right")
console.log("answer", answer)

//go left, if left executes all the stuff in {}
if (answer === "left"){
    console.log("you went left")
    var answer2 = window.prompt("Do you follow th cat")
    console.log("answer2", answer2)
    //nested if stmt, only executed if the parent if was true and this one is true
    if (answer2 === "yes"){
        console.log("you followed the cat")
    }
}
//go right
else if (answer === "right"){
    console.log("you went right")
    var answer2 = window.prompt("do you slay the dragon")
    console.log("answer2", answer2)
}