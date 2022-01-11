//runtime 17s
async function getAbc(){
  let A = await getUsers(); //10
  let B = await getValueB(); // 5
  let C = await getValueC(); // 2

  return [A,B,C];
} 

//runtime 10s
async function getAbcConcurent() {
  let result = Promise.all([getValueA, getValueB, getValueC]);
  return result;
}

async function myFunction() {
  return "Hello";
}

myFunction().then(value => console.log(value));