const p = new Promise((resolve, reject) => {
  resolve(1);
});

async function myAsync(){
  try {
    return p;
  }catch(err) {
    return err;
  }
}

function f() {
  return Promise.resolve(p);
}

// console.log(p === myAsync()); // False
// console.log(p === f()); // True

myAsync();