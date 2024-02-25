// Fetch user data from the API
async function fetchUserData() {
    try {
        const response = await fetch('https://engineering-task.elancoapps.com/api/applications');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// Fetch resource data from the API
async function fetchResourceData() {
    try {
        const response = await fetch('https://engineering-task.elancoapps.com/api/resources');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching resource data:', error);
        throw error;
    }
}

// Render the list of users
async function renderUsers() {
    try {
        const data = await fetchUserData();
        const userList = document.querySelector('#user-list ul');
        
        // Generate HTML markup for each user and append to the list
        data.forEach(application => {
            const markup = `<li onclick="navigateToPage('${application}')">${application}</li>`;
            userList.insertAdjacentHTML('beforeend', markup);
        });

        // Add 'loaded' class to signal that the content has been loaded
        document.getElementById('user-list').classList.add('loaded');
    } catch (error) {
        console.error('Error rendering users:', error);
    }
}

// Navigate to the corresponding page when a user is clicked
function navigateToPage(application) {
    window.location.href = application.toLowerCase() + '.html';
}

// Render the list of resources
async function renderResources() {
    try {
        const data = await fetchResourceData();
        const resourceList = document.querySelector('#resource-list ul');

        // Generate HTML markup for each resource and append to the list
        data.forEach(resource => {
            const markup = `<li onclick="navigateToPage('${resource}')">${resource}</li>`;
            resourceList.insertAdjacentHTML('beforeend', markup);
        });

        // Add 'loaded' class to signal that the content has been loaded
        document.getElementById('resource-list').classList.add('loaded');
    } catch (error) {
        console.error('Error rendering resources:', error);
    }
}

// Navigate to the corresponding resource page when a resource is clicked
function navigateToResource(resource) {
    window.location.href = resource.toLowerCase() + '.html';
}

// Initiate the rendering of users and resources when the script is executed
renderUsers();
renderResources();
