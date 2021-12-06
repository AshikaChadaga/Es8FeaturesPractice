//es6
// function twoSecondFunction(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//           resolve('Response after Resolve is : 2 seconds have passed');
//        }, 2000);
//     })
//  }

//  twoSecondFunction().then(resp=>{
//     console.log(resp);
//  })
//  console.log('end of script');

function twoSecondFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Response after Resolve is : 2 seconds have passed');
        }, 2000);
    })
}
async function asyncFunc() {
    console.log('inside asyncFunc');
    const response = await twoSecondFunction();
    console.log(response);
}
asyncFunc();
console.log("end of script");