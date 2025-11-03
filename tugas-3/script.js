document.addEventListener('DOMContentLoaded', () => {
    // Anda bisa menambahkan fitur JavaScript di sini di kemudian hari.
    // Contoh sederhana: Mencetak pesan ke konsol saat halaman dimuat
    console.log('CV Ilham Akbar Jamil telah dimuat sepenuhnya!');

    // Contoh fitur sederhana: Menambahkan class 'visible' ke elemen saat di-scroll ke view
    // (Membutuhkan sedikit penyesuaian CSS dan HTML untuk efek ini)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Tambahkan class untuk animasi
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tambahkan class 'fade-in-element' ke setiap card agar bisa dianimasikan
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('fade-in-element');
        observer.observe(card);
    });

    // Tambahkan style di CSS untuk .fade-in-element dan .fade-in
    // .fade-in-element { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
    // .fade-in { opacity: 1; transform: translateY(0); }
});

// Anda bisa menambahkan fungsi interaktif lainnya di sini.
// Misalnya, validasi form (jika ada), efek hover dinamis yang lebih kompleks, dll.