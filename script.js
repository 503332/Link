const linkData = [
    // ... (Your link data for 3D Printing, Companies, Software, AI, and Email)
];

const linkGrids = document.querySelectorAll('.link-grid');

linkData.forEach((category, index) => {
    const grid = linkGrids[index];
    category.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.classList.add('link-card'); 
        grid.appendChild(linkElement);
    });
});