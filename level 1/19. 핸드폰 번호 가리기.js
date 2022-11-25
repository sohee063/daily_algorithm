function solution(phone_number) {
  let res = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    res += "*";
  }
  return res + phone_number.slice(-4);
}
