function solution(num_list) {
  let tempArr = [];

  for (let i in num_list) {
    tempArr.push(num_list[num_list.length - i - 1]);
    if (tempArr.length === num_list.length) return tempArr;
  }
}

/*
주어진 배열을 역순으로 뒤집는 문제였는데,
reverse() 메서드를 사용할 수 있었지만 사용하지 않고 풀어보았다.

tempArr로 임시 배열을 만든 후,
주어진 배열을 역순으로 push 해준 후 tempArr와 주어진 배열의 길이가 같아지면(종료 조건) tempArr를 리턴하도록 하였다.
*/
