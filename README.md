# 순수 바닐라 자바스크립트로 smooth한 스크롤 효과

<img width="1784" alt="스크린샷 2021-02-07 오전 2 29 40" src="https://user-images.githubusercontent.com/66318653/107125295-573b3280-68ec-11eb-8984-b5092d07d979.png">

<hr />

<img width="1792" alt="스크린샷 2021-02-07 오전 2 34 34" src="https://user-images.githubusercontent.com/66318653/107125381-05df7300-68ed-11eb-869a-d5123cbee53c.png">

<hr />

## 코드 설명

```javascript
const goDownBtn = document.getElementById("goDown");
const pageUp = document.querySelectorAll(".fa-angle-up");
const pageDown = document.querySelectorAll(".fa-angle-down");

goDownBtn.addEventListener("click", goDown);
pageUp.forEach((but) => {
  but.addEventListener("click", goUp);
});
pageDown.forEach((but) => {
  but.addEventListener("click", goDown);
});

function goDown() {
  const currentPageYOffset = window.pageYOffset;
  console.log(currentPageYOffset);
  window.scrollTo({
    top: currentPageYOffset + 1016,
    left: 0,
    behavior: "smooth",
  });
}

function goUp() {
  const currentPageYOffset = window.pageYOffset;
  window.scrollTo({
    top: currentPageYOffset - 1016,
    left: 0,
    behavior: "smooth",
  });
}
```

더 알아보기 버튼 클릭 시 함수 goDown 실행.

두 번째 이미지에 위 아래로 있는 화살표를 클릭하면 goDown과 goUp 함수 실행.

화살표는 매 페이지에 있기 때문에 querySelectorAll로 배열에 다 담은 뒤 forEach 함수를 이용해 각각의 버튼에 이벤트를 등록.

<hr />

**배운 점**

동영상을 보고 따라 하지 않고 구글링만으로 작업을 하는 챌린지를 계속 하고 있다.

보기엔 다 쉬워 보이지만 막상 구글링만으로 작업 시 소요시간은 오래 걸리지만 습득에 있어서 가장 뛰어난 효과인 듯하다.

간단한 페이지 이동 구현이지만 페이지 위치 client(), page(), offset() 등등을 공부했다.

요즘 내 힘으로 뭔가를 만들어가는 것에 흥미를 느낀다.
