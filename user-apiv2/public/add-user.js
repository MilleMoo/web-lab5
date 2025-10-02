document.addEventListener('DOMContentLoaded', () => {
    const addUserForm = document.getElementById('addUserForm');
    const avatarFileInput = document.getElementById('avatarFile');
    const avatarPreview = document.getElementById('avatarPreview');

    avatarFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarPreview.src = e.target.result;
                avatarPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    addUserForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (avatarFileInput.files.length === 0) {
            alert('Please select an avatar image.');
            return;
        }
        
        const formData = new FormData();
        
        formData.append('username', document.getElementById('username').value);
        formData.append('email', document.getElementById('email').value);
        
        formData.append('avatar', avatarFileInput.files[0]);

        try {
            const response = await fetch('http://localhost:5000/api/user', { 
                method: 'POST',
                body: formData, 
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create user');
            }

            alert('User added successfully!');
            window.location.href = 'index.html';

        } catch (err) {
            console.error('Error adding user:', err);
            alert(`Error: ${err.message}`);
        }
    });
});