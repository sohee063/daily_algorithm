function solution(participant, completion) {
  let obj = {};

  participant.map((el) => {
    if (obj[el] === undefined) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });

  completion.map((el) => obj[el] && obj[el]--);

  let arr = [];

  for (let i in obj) {
    obj[i] !== 0 && arr.push(i);
  }

  return arr.join();
}
