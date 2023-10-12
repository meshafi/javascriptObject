import values from "./values.js";
import testObject from "./object.js";

const arr=values(testObject);
for(let index=0;index<arr.length;index++){
    console.log(arr[index]);
}