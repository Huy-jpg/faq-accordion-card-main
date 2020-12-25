const containerQs = document.querySelectorAll('.detail-questions');

containerQs.forEach(container => {
  container.addEventListener('click', () =>{
    container.nextElementSibling.classList.toggle('active');
  })
})