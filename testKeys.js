import keys from "./keys.js";
import testObject from "./object.js";

const result=keys(testObject);

for(let i=0;i<result.allNames.length;i++){
    console.log(result.allNames[i]+" ");
}
for(let index=0;index<result.allKeys.length;index++){
    console.log(result.allKeys[index]);
}