const draw = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;

for (const element of draw) {
  
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, time);

  time += 200;
}
