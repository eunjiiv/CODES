document.addEventListener("DOMContentLoaded", function() {
    fetch('tech.json')
        .then(response => response.json())
        .then(data => displayPhones(data))
        .catch(error => console.error('Error fetching the JSON data:', error));

    function displayPhones(techs) {
        const techList = document.getElementById('tech-list');

        techs.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.classList.add('tech-card');

            techCard.innerHTML = `
                <h2>${tech.brand} ${tech.model}</h2>
                <p><strong>Release Date:</strong> ${tech.release_date}</p>
                <p><strong>Dimensions:</strong> ${tech.dimensions.weight}, ${tech.dimensions.thickness}</p>
                <p><strong>Display:</strong> ${tech.display.size}, ${tech.display.resolution}</p>
                <p><strong>Camera:</strong> ${tech.camera.main}, ${tech.camera.video}</p>
                <p><strong>Memory:</strong> ${tech.memory.ram}, ${tech.memory.chipset}</p>
                <p><strong>Battery:</strong> ${tech.battery.capacity}, ${tech.battery.charging_speed}</p>
                <button class="showCommentbutton" onclick="toggleComment(this)">Show Comment</button>
                <p class="comment" style="display:nome;">${tech.comment}</p> 
            `;

            techList.appendChild(techCard);
        });
    }

    
    
});

function toggleComment(button) {
    const comment = button.nextElementSibling; 
    comment.style.display = comment.style.display === 'none' ? 'block' : 'none';
    button.textContent = comment.style.display === 'none' ? 'Show Comment' : 'Hide Comment';
}