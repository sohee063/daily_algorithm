function solution(a, b) {
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (a === 1 && b <= day.length) {
    return day[b - 1];
  }

  let daysCount = b;

  month.splice(0, a - 1).map((el) => (daysCount += el));

  return daysCount % 7 === 0 ? "THU" : day[(daysCount % 7) - 1];
}
