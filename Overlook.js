document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const musicCards = document.querySelectorAll('.character-card');

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase(); // Отримуємо текст пошуку і переводимо його в нижній регістр

        musicCards.forEach(card => {
            const musicName = card.querySelector('.music-name').textContent.toLowerCase(); // Отримуємо назву пісні
            if (musicName.includes(searchTerm)) {
                card.style.display = 'flex'; // Показуємо картку, якщо назва містить текст пошуку
            } else {
                card.style.display = 'none'; // Ховаємо картку, якщо назва не містить текст пошуку
            }
        });
    });
});