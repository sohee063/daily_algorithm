function solution(numbers, k) {
  let index = 0;

  for (let i = 0; i < k; i++) {
    index += 2;
    if (index > numbers.length) {
      index -= numbers.length;
    }
  }
  return numbers[index - 2];
}

/*
k가 증가 할 때마다 index를 2씩 증가시킨다.
index가 number의 길이보다 길어지면 number의 길이만큼 빼서 index가 number배열을 초과하지 않게 한다.
*/