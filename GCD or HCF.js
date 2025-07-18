// function myFunction(a,b){
//     let smaller = Math.min(a,b)
//     let hfc = 1
//     let i = 0
    
//     while(i<smaller){
//         if(a%i===0 && b%i===0){
//             hfc = i
//         }
//         i++
//     }
//     return hfc
// }

// const num1 = 10;
// const num2 = 12;

// console.log("vlaues is:",myFunction(num1 , num2))

function fin(a,b){
    if(b==0){
        return a
    }
    return fin(b ,  a%b)
}   
    
const num1 = 12;
const num2 = 18;

console.log("values is:",fin(num1, num2))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
