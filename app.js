const containerQs = document.querySelectorAll('.detail-questions'),
      answers = document.querySelectorAll('.answers');

containerQs.forEach(container => {
  container.addEventListener('click', () => {
    answers.forEach(ans => {
      if(ans.classList.contains('active')){
        ans.classList.remove('active');
      } else{
        ans.classList.add('active');
      }
    })
  })
})