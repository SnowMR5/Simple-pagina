//document.querySelector('.fa-arrow-alt-circle-down').addEventListener('mouseover', function() {

document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.botonera').classList.toggle('show'); 
})

document.querySelector('.fa-arrow-alt-circle-right').addEventListener('click', function() {
    document.querySelector('.desp').classList.toggle('desp-res');
})

document.querySelector('.top-btn').addEventListener('click', function() {
        window.scrollTo({
          top: -0,
          behavior: 'smooth'
      });
})
