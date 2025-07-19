function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 300;
  carousel.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
}

function openModal(title, description, image) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
