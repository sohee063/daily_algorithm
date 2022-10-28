function solution(num, total) {
  let mid = total / num;
  let start = Math.ceil(mid - Math.floor(num / 2));
  let end = Math.floor(mid + Math.floor(num / 2));

  return new Array(end - start + 1).fill().map((arr, i) => {
    return i + start;
  });
}

/*
start,mid,end값을 구하고 new Array메서드를 이용해 새로운 배열을 생성 한 후 값을 담아주었다.
*/

const me = {};

me.a = "sarah";
console.log(me); // {a : 'sarah'}
