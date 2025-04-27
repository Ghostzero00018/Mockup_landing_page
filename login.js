
  // Modal open/close functionality
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.close');
  const overlay = document.getElementById('modalOverlay');

  loginBtn.onclick = function() {
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
  }
  closeModal.onclick = function() {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
  }
  overlay.onclick = function() {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
  }

