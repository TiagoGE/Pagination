const itemsPerPage = 10;
let currentPage = 1;

function displayContacts(page) {
    // console.log('Displaying contacts for page:', page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedUsers = users.slice(startIndex, endIndex);

    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear previous content

    slicedUsers.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'contact-item cf';

        listItem.innerHTML = `
            <div class="contact-details">
                <img class="avatar" src="${user.image}">
                <h3>${user.name}</h3>
                <!-- Adjusted property to display -->
                <span class="date">Joined ${user.joined}</span>
            </div>
        `;

        contactList.appendChild(listItem);
    });
}

function displayPagination() {
    // console.log('Displaying pagination buttons.');
    const totalContacts = users.length;
    const totalPages = Math.ceil(totalContacts / itemsPerPage);

    const totalContactsHeading = document.getElementById('totalContacts');
    totalContactsHeading.textContent = `Total: ${totalContacts}`;

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear previous pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayContacts(currentPage);
        });

        pagination.appendChild(pageButton);
    }
}
// display
displayContacts(currentPage);
displayPagination();
