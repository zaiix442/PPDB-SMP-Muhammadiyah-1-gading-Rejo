/ Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const form = document.getElementById('registrationForm');
const modal = document.getElementById('successModal');
const noPendaftaranSpan = document.getElementById('noPendaftaran');

form.addEventListener('submit', function(e) {
   // e.preventDefault();
    
    // Generate nomor pendaftaran
    const nisn = document.getElementById('nisn').value;
    const nama = document.getElementById('nama').value;
    const noPendaftaran = `SMPM1GR-${nisn.substring(-6)}-${Date.now().toString().slice(-4)}`;
    
    // Simulasi pengiriman data
    setTimeout(() => {
        // Tampilkan nomor pendaftaran di modal
        noPendaftaranSpan.textContent = noPendaftaran;
        
        // Update modal dengan nama
        modal.innerHTML = modal.innerHTML.replace(/\${nama}/g, nama);
        
        // Reset form
        form.reset();
        
        // Tampilkan modal
        modal.style.display = 'block';
        
        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
});

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form validation
const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#4CAF50';
        }
    });
});

