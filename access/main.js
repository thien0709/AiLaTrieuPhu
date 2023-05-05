// Get button submit
const btn1 = document.querySelector("#box .btn1");
// Record question
let count = 1;
let cqs = 2;
let questions = [];
btn1.addEventListener("click", function () {
  const boxqs = document.querySelector("#box #boxqs"); // Get new box 
  const qs = document.querySelector("#box #boxqs .p"); // Get question
  const ans = document.querySelectorAll("#box #boxqs .answer-box input"); // Get answer  
  // Check value
  if(qs.value.length == 0 || ans[0].value.length == 0 ||ans[1].value.length == 0 || ans[2].value.length == 0 ||ans[3].value.length == 0 ){
    qs.focus();
    alert("Hay nhap dung format! ");
    return;
  } 
  // Create new box
  boxqs.innerHTML = `<h2>Nhập câu hỏi ${cqs++}</h2>
  <input type="text" placeholder="This is a question" class="p">
  <div class="answer-box">
      <input type="text" placeholder="Answer 1">
      <input type="text" placeholder="Answer 2">
      <input type="text" placeholder="Answer 3">
      <input type="text" placeholder="Answer 4">`;

  let question = {
    stt: count++,
    qs: qs.value,
    ans1: ans[0].value,
    ans2: ans[1].value,
    ans3: ans[2].value,
    ans4: ans[3].value,
  };
  questions.push(question);
  localStorage.setItem("questions", JSON.stringify(questions));
});
// Get button start
const btn2 = document.querySelector("#box .btn2");
//  Appear question
const box = document.querySelector("#box");
btn2.addEventListener("click", function () {
  box.style.display = "none";
  const questionContent = document.querySelector("#content #question");// Get question
  const answerContent = document.querySelector("#content #answer");// Get answer
  ;
  // Get question in localStorage
  let localQuestion = JSON.parse(localStorage.getItem("questions"));
  for(let i = 0 ;i <= questions.length; i++){
    questionContent.innerText = localQuestion[i].qs;
    
  }
});