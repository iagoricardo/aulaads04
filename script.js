let users = [];

function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const user = {
        name,
        email,
        phone
    };

    users.push(user);
    displayUsers();
    clearForm();
}

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeUser(user);

        li.appendChild(removeButton);
        userList.appendChild(li);
    });
}

function removeUser(user) {
    const index = users.indexOf(user);
    if (index !== -1) {
        users.splice(index, 1);
        displayUsers();
    }
}

function clearForm() {
    document.getElementById('userForm').reset();
}
