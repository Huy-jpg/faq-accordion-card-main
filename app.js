const questions = document.querySelectorAll('.detail-questions'),
      arrow = document.querySelector('.questions::after'),
      answer = document.getElementsByClassName('answers'),
      containerQs = document.querySelectorAll('.questions');

document.addEventListener('click', function(e) {
  if(e.target.matches('.detail-questions' || '.questions')){
    showAnswer();
  }
});

function showAnswer() {
  for (let i = 0; i < questions.length; i++) {
    if(answer[i].style.display === 'none'){
      answer[i].style.display = 'block'
    }else{
      answer[i].style.display = 'none'
    }
  }
}