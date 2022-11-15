function solution(my_string) {
  let check = /[^0-9]/g;
  return my_string.split(check).reduce((a, b) => Number(a) + Number(b), 0);
}
