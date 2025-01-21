function filterCountries() {
    const searchQuery = document.getElementById('searchCountry').value.toLowerCase();
    const countryItems = document.querySelectorAll('.country-item');
    let found = false;

    countryItems.forEach(item => {
        const countryName = item.getAttribute('data-name').toLowerCase();
        if (countryName.includes(searchQuery)) {
            item.style.display = 'flex'; // 使用 flex 布局
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!found) {
        alert('対象国なし');
        countryItems.forEach(item => {
            item.style.display = 'flex';
        });
    }
}