function solution(dots) {
  const width = dots.map((n) => n[0]);
  const height = dots.map((n) => n[1]);

  return (
    (Math.max(...width) - Math.min(...width)) *
    (Math.max(...height) - Math.min(...height))
  );
}

/*
x 좌표 중 가장 큰 값에서 가장 작은 x 값을 뺀 값을 width로,
y 좌표 중 가장 큰 값에서 가장 작은 y값을 뺀 값을 height로 할당 후 두 값을 곱해주었다.
*/
