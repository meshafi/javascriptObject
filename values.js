import testObject from "./object.js";

function values(testObject){
    const arr=[]
   for(let key in testObject){
      arr.push(testObject[key])
   }
   return arr;
}
export default values;