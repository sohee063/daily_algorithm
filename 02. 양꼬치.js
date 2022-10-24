function solution(n, k) {
  let answer = n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
  return answer;
}

/* 
양꼬치 10인분마다 음료수 1개 서비스이니까 인분 나누기 10을 한 후에 parseInt로 소수값을 버려서 계산하였다.
*/
