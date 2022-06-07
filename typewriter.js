const sentence = "Hello there from Lighthouse Labs!";
// const sentence2 = "Look, another sentence that also works just as well!";
let timer = 0;
for (let char of sentence) {
  timer += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}
setTimeout(()=> {process.stdout.write('\n')}, 100*sentence.length);

// for (let char of sentence2) {
//   timer += 100;
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, timer)
// };
