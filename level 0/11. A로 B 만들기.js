function solution(before, after) {
  let sort = (str) => [...str].sort();
  return sort(before).join("") === sort(after).join("") ? 1 : 0;
}

/* before과 after 문자열을 sort로 정렬시킨 다음 서로 비교하였다. */
