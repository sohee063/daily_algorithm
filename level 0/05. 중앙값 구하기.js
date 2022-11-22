function solution(arr) {
  return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
}

/* sort 메서드를 이용하여 오름차순 정렬을 한 후, arr의 length의 반절값을 사용하여 배열의 중간값을 구한다. 
이 때, arr의 길이는 홀수이므로 Math.floor 로 소수점내림을 해주었다. */
