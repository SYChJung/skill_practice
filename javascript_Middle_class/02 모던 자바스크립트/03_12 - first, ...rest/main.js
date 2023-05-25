// 여기에 코드를 작성하세요
function ignoreFirst(first, ...others) {
  for (const arg of others){
    console.log(arg);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);