function solution(numbers, direction) {
  let answer = [];
  if (direction === "right") {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }
  return answer;
}

/*
direction 이 right 일 때와 left 일때로 분기하여 answer이라는 빈배열에 값을 넣어주었다.
다른 사람 풀이를 보았는데 unshift, shift, pop을 이용하여 반복문을 사용하지 않은 간단한 풀이 방법이 있어서 같이 올려본다.
*/

function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
