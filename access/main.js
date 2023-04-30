// Get button submit
const btn1 = document.querySelector("#box .btn1");
// Get question
const qs = document.querySelector("#box .p");
// Get answer
const ans = document.querySelectorAll("#box .answer-box input");
console.log(btn1, btn2, qs, ans);
// Record question
let count = 1;
let questions = [];
btn1.addEventListener("click", function () {
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
//