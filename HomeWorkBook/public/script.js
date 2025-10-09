document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById("user-container");

    async function fetchAndDisplayUsers() {
        try {
            const response = await fetch("http://localhost:5000/api/user");
            const users = await response.json();
            
            userContainer.innerHTML = ""; 

            if (users.length === 0) {
                userContainer.innerHTML = '<p>No users found.</p>';
                return;
            }

            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user-card';
                
                card.innerHTML = `
                    <img src="${user.avatarUrl}" 
                         alt="${user.username}'s avatar" 
                         class="user-avatar" 
                         data-id="${user._id}">
                    <h2>${user.username}</h2>
                    <p>${user.email}</p> 
                `;
                userContainer.appendChild(card);
            });
        } catch (err) {
            console.error("Failed to fetch users: ", err);
            userContainer.innerHTML = '<p>Failed to load users. Please check the console.</p>';
        }
    }

    userContainer.addEventListener('click', (event) => {
        const clickedImage = event.target;

        if (clickedImage.classList.contains('user-avatar')) {
            const userId = clickedImage.dataset.id;

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none'; 

            fileInput.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const formData = new FormData();
                formData.append('avatar', file);

                try {
                    clickedImage.style.filter = 'blur(3px)';

                    const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                        method: 'PUT',
                        body: formData,
                    });

                    if (!response.ok) throw new Error('Failed to update avatar.');
                    
                    const result = await response.json();
                    
                    clickedImage.src = result.user.avatarUrl;
                    
                } catch (err) {
                    alert(err.message);
                } finally {
                    clickedImage.style.filter = 'none';
                }
            });

            fileInput.click();
        }
    });

    fetchAndDisplayUsers();
});