console.log(` --------------Exercise 1 -----------------------------`)//1

 let cityName="New york";
 let str1=cityName.split("");
 let str=str1.splice(0,3);
 let str2=str.join("");
 if(str2===`Los` || str2===`New`){console.log(cityName);}
 else {console.log("The city name does not begin with Los or New");}

console.log(`-------------Exercise  2 -----------------------------`)//2

let ar = [5, 10, 15];
let sum=0;
for(let i=0;i<=2;i++){ 
    sum=sum+ar[i];
}
console.log(` sum is ${sum}`);

console.log(` ------------------- Exercise 3 -----------------------------`)//3
let fName=`Yaser`;
let lName=`Rifai`;
console.log(`"${lName}, ${fName}"`);

console.log(`------------------Exercise  4 -----------------------------`)//4
let num=1000;
if (num%100===0){console.log(true)}
else            {console.log(false)}

console.log(`--------------------Exercise   5 -----------------------------`)//5
let strAdd="ly";
let strA=["clever", "meek", "hurried", "nice"];
let strB=[""];
for(let a=0;a<strA.length;a++){
     strB[a]=strA[a]+strAdd;     
}
console.log(strB);


console.log(`----------------- Exercise  6 -----------------------------`)//6
let num1=6;
if(num1%2===0){console.log(`even`)}
else          {console.log(`odd`)}

console.log(`7 -----------------------------`)//7
  let an=30;
  let an1=2;
  if (180-(an+an1)<90) {console.log(` the third angel is An acute angle`)}
  else if (180-(an+an1)==90) {console.log(` the third angel is A right angle `)}
  else   {console.log(` the third angel is An obtuse angle `)}

console.log(`8 -----------------------------`)//8
let word=`maria jane jones`
let word1=[];
let ww;
for(d=0;d<word.length;d++){
    if(word[d]==" "){word1[d+1]=word[d+1].toUpperCase()}
    else    {word1[d+1]=word[d+1]}
}
word1[0]=word[0].toUpperCase();
ww=word1.join(" ");
console.log(ww.toString());

console.log(` ------------ 9 -----------------------------`)//9
let myword1="This is an example";
myword=myword1.trim();
let k=1;
let r=0;
 for(r=0;r<myword.length;r++){
 if (myword[r]==" "){k=k+1}
}
console.log(k);

console.log(`10 -----------------------------`)//10
let arr=[2, 3, 1, 0];
let arr1=[];
let m=4;
let z=0;
for(z=0;z<arr.length;z++)
{
  arr1[z]=arr[z]*m;
}
console.log(arr1);