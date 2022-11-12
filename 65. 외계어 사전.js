function solution(spell, dic) {
  let word = spell.sort();
  let answer = dic.filter((el) => {
    return [...el].sort().join("") === word.join("");
  });
  if (answer.length > 0) {
    return 1;
  } else return 2;
}
