const containerQs = document.querySelectorAll('.detail-questions')
      arrows = document.querySelectorAll('.arrow');

containerQs.forEach(container => {
  container.addEventListener('click', () =>{
    container.nextElementSibling.classList.toggle('active');
    container.nextElementSibling.nextElementSibling.classList.toggle('transition');
  })
})