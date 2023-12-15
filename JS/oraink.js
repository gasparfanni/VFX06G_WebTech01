const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const description = item.querySelector('p');

    
    item.addEventListener('mouseover', () => {
        description.style.display = 'block';
        description.style.opacity = 1;
    });

    
    item.addEventListener('mouseout', () => {
        description.style.display = 'none';
        description.style.opacity = 0;
    });
});