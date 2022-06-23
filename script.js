window.onload = function () {
  // 참가자 수 확인
  const number = Number(prompt("참가자는 몇 명입니까?"));

  // 참가자 수를 number에 렌더링한다.
  const total = document.getElementById("total");
  total.textContent = number;

  // 제시어를 저장할 변수
  let word;

  // 입력한 단어를 저장할 변수
  let newWord;

  // 입력한 단어를 저장한다.
  const $input = document.querySelector("input");
  $input.addEventListener("input", (event) => {
    newWord = event.target.value;
  });

  // 버튼을 누르면 입력한 단어가 렌더링된다.
  const btn = document.querySelector(".btn");
  const here = document.getElementById("word");
  const order = document.getElementById("order");

  // 단어 렌더링
  const renderingWord = () => {
    // 입력한 단어를 제시어 자리에 렌더링한다.
    word = newWord;
    here.textContent = word;
    // 입력창을 비운다.
    $input.value = "";
    $input.focus();
  };

  // 참가자 번호 매기기
  const count = () => {
    // 참가자 번호가 1씩 증가하다가 총 인원수를 넘기면 다시 1로 돌아온다.
    let num = Number(order.textContent);
    num += 1;
    if (num > number) {
      num = 1;
    }
    order.textContent = num;
  };

  const buttonClicked = () => {
    // 제시어가 비어있는 경우
    if (!word || word[word.length - 1] === newWord[0]) {
      renderingWord();
      count();
    } else {
      // 마지막 글자와 첫 글자가 다르다면 경고창을 띄운다.
      alert("입력한 단어를 다시 확인해 주세요.");
      // 입력창을 비운다.
      $input.value = "";
      $input.focus();
    }
  };

  btn.addEventListener("click", buttonClicked);
};
