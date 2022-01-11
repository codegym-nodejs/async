function resolveAfter2Second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolve after 2 seconds"), 2000);
  })
}

function resolveAfter1Second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolve after 1 seconds"), 1000);
  })
}

// resolveAfter2Second.then(value => resolveAfter1Second()).catch(err => console.error(err));

async function main() {
  console.log(await resolveAfter2Second());
  console.log(await resolveAfter1Second());
}
main()