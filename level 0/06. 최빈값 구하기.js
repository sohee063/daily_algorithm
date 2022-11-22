function solution(arr) {
  let stockObj = {};

  for (let i in arr) {
    if (!stockObj[arr[i]]) stockObj[arr[i]] = 0;
    stockObj[arr[i]]++;
  }

  let resArr = Object.values(stockObj);
  let maxValue = Math.max.apply(null, resArr);

  resArr.sort((a, b) => a - b);

  // 최빈값이 두 개 이상일 때
  if (resArr[resArr.length - 2] === resArr[resArr.length - 1]) {
    return -1;
  }

  // 최빈값이 한 개일 때
  for (let j in stockObj) {
    if (Number(stockObj[j]) === Number(maxValue)) return Number(j);
  }
}

/*  다른사람들의 풀이를 보았는데 처음 stockObj 객체를 생성할 때 for of 구문과 논리합연산자를 사용한 것과 
reduce를 사용한 걸 보고 한번 더 놀랐다...reduce랑 어서 친해져야 할텐데...!
그리고 최빈값의 갯수에 따라 분기 할 때 삼항연산자로 로직을 변경 할 수 있었는데 
그렇게 되면 코드도 무척 간단해지고 가독성이 높아지는 것 같다. */
