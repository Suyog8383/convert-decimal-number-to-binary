let num=7;
let result="";
while(num>0){
    let rem= num % 2;
    num = parseInt(num / 2);
    result = rem + result 
}
console.log(result)
