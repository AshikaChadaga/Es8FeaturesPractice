let marksArray = [100, 90, 80, ,];

console.log("Length of array : ", marksArray.length);
console.log("Marks Array : ", marksArray);

//forEach ignores last entry 
marksArray.forEach(function (e) { 
    console.log(e)
})

function sumOfMarks(marks,){ 
    let sum=0;
    // trailing commas are ignored
    marks.forEach(function(e){
       sum+=e;
    })
    return sum;
 }
 console.log("First Sum of Marks : ", sumOfMarks([10,20,30]));
 console.log("Second Sum of Marks : ", sumOfMarks([1,2,3],));