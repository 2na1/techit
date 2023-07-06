

var mbti = ["INFP", "ENFJ", "INTJ"];


// 배열의 앞쪽에 추가
console.log(mbti.unshift("ESFP", "ISTJ"));

// 스프레드 문법
var newMbti = ["ESFP", "ISTJ", ...mbti];
console.log(mbti);
console.log(newMbti);

//배열의 앞쪽 요소 반환 후 삭제
console.log(mbti.shift());
console.log(mbti);


console.log(mbti.slice(0, 2)); 
console.log(mbti.slice()); 
console.log(mbti.slice(-1)); 


console.log(mbti.join());
console.log(mbti.join("-"));
console.log(mbti.join("|"));
console.log(mbti.join(""));


console.log(mbti.sort());


console.log(mbti.sort().reverse());