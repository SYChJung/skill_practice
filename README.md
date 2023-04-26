# skill_practice

javascript 실습 내용을 기록한 repo다.<br />

08장 DOM<br />
product-result.html<br />
js/product.js<br />
domNode.html<br />
register.html, register.js<br />
	참석자 명단 작성. imput 박스에 참석자의 이름을 기입하고, 기입된 이름들을 imput 박스 아래에 표시.<br />
	삭제 기능을 넣어서 기입된 이름을 지울 수도 있게 하기.<br />
	우리가 일에 하는 것 보다 javascript로서 더 근본적인 작업이랄까.<br />
	일을 할 때는 그냥 html를 기입하는데, 여기는 javascript로 노드를 만들고 연결관계를 만든다.<br />
nodeList.html<br />

09장 FORM<br />
 	이번에는 내가 직접 작업한 것만 폴더에 넣었다. (그래서 이번에는 뭘 작업했나 따로 여기에 적지 않았다.)<br />
 	08장에 이어서 FORM를 통해 사이트를 살펴보는 방법이 주된 내용이다.<br />
 	또한 대체로 id가 없을 경우, name를 대신 사용하는 방법이다.<br />
 	이외에도 로그인 화면 등의 자동원리 : 어떻게 사용자에게 아이디와 비밀번호는 몇 자 이상 혹은 이하로 쓰게 하는 지 등을 다루고 있다. Option 등 이전 일하면서 봤던 요소들도 여기서 다시 보고, 더 깊이 이해할 수 있게 되었다.<br />

10장 브라우저 객체 모델<br />
	해당 장에 있는 내용은 resizeBy(), resizeTo() 같이 Port Congestion Report에서 팝업창의 위치와 크기를 조정할 때 많이 본 것이다.<br />
	크롤링 등 기존에 다른 웹사이트를 접속 및 분석할 때 사용한 방법에 대한 내용도 있었다. 예로 userAgent의 mozilla 버젼, cookieEnable 등 그동안 작업하면서 사용한 소스에 대한 이해를 더 할 수 있었다.<br />
	그리고 back(), forward() 등을 이용하면 url를 다시 기입하거나 특정 버튼을 누를 필요없이 이전 이후 페이지를 오갈 수 있을 거다.<br />

자바스크립트 완벽 가이드<br />
초반부 내용은 기본적인 내용이라 다 알지만, 책이 자세히 설명하고 있어서 첫 장부터 다시 살펴보기로 했다. 자바스크립트의 각 요소와 구조에 대한 설명이 주 내용인지라 실습은 없다.

01장 자바스크립트 소개<br />
	자바스크립트에 대한 소개와 앞으로 각 장에서 공부할 내용을 다루고 있다. 전반적으로 책에 대한 대략적인 설명이고, 앞으로 배울 자바스크립트 요소들을 모두 적용한 charfreq.js 실습이 있다.<br />

02장 어휘 구조<br />
	세미클론, 줄바꿈을 비롯해서 자바스크립트 언어의 어법을 다루고 있다. 많이 간과되거나 생각하지도 못했던 위험 요소도 다루고 있는데, 대표적으로:<br />
	let y = x + f<br />
	(a+b).toString()<br />
	처럼 세미클론없이 줄바꿈을 할 경우,<br />
	let y = x + f(a+b).toString();<br />
	으로 인식되거나,<br />
	return<br />
	true<br />
	를<br />
	return; true;<br />
	으로 인식될 위험이 있다. 자바스크립트는 기본적으로 줄바꿈과 공백을 인지하지 않으니 세미클론으로 구분하지 않으면 위와 같은 문제들이 생길 수 있다.<br />
10
03장 타입, 값, 변수<br />
	자바스크립트에서 다루는 각 요소에 대해 다루고 있다. 몇몇은 업무상 가장 유의해야 되는 내용들도 있다.<br />
	대표적인 예로, 자바스크립트를 포함한 프로그래밍 언어는 기본적으로 2진법이다. 따라서 1/2, 1/8, 1/1024는 정확히 계산하지만, 유저가 필요한 1/10, 1/100은 정확히 표현하지 못한다.<br />
	이 탓에 0.1를 정확히 계산하는 것이 아니라 근사값을 산출한 것이고, 이 탓에 0.3 - 0.2와 0.2 - 0.1이 같지 않았다. 따라서, 소수점이 있는 값들의 차이를 서로 비교할 수가 없다.<br />
	(책에서는 정수로 바꿔서 계산할 것을 추천한다.)<br />