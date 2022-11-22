function solution(my_string) {
  return [...new Set(my_string)].join("");
}

/*
new Set() 메서드를 사용하여 중복을 제거하였다.

Set()은 value들로 이루어진 집합이다.
Array와는 다르게 Set은 중복된 value를 포함 할 수 없다.
따라서 Set에 이미 존재하는 값을 추가하려고 하면 아무일도 일어나지 않는다.
*/
