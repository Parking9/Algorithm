function solution(day, arr) {
    return arr.filter((car) => {
        return car % 10 === day;
    }).length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
console.log(solution(0, arr2));
