function solution(num_list) {
  let tempArr = [];

  for (let i in num_list) {
    tempArr.push(num_list[num_list.length - i - 1]);
    if (tempArr.length === num_list.length) return tempArr.join("");
  }
}

/* 
기존에 풀었던 배열 뒤집기를 활용하였다.
다른점이 있다면 문자열이므로 join()메서드를 사용하여 배열을 벗기고 문자열로 리턴하였다.
*/
