// 1-11
//여기에 코드를 작성하세요
fetch('https://workey.codeit.kr/ratings')
  .then((response) => response.text())
  .then((result) => { console.log(result); });


// 2-04
fetch('https://learn.codeit.kr/api/topics')
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result);// 여기에 코드를 작성하세요
    const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급');
    console.log(beginnerLevelTopics);
  });


// 2-12 : POST
// 새 직원 정보는 원하는 대로 작성하세요
const newMember = {
  name: 'A',
  email: 'c@d',
  department: 'e',
};


fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember), // 여기에 코드를 작성하세요
})
  .then(() => {
    fetch('https://learn.codeit.kr/api/members')
      .then((response) => response.text())
      .then((result) => {
        const members = JSON.parse(result); // 여기에 코드를 작성하세요
        console.log(members[members.length - 1]);
      });
  });