function showHome() {
    document.querySelector('#homeContent').style.display = 'block';
    document.querySelector('#chartsContent').style.display = 'none';
    document.querySelector('#aboutContent').style.display = 'none';
    document.querySelector('#subNavbar').style.display = 'none';
    clearChartsContainer();
}

function showCharts() {
    document.querySelector('#homeContent').style.display = 'none';
    document.querySelector('#chartsContent').style.display = 'block';
    document.querySelector('#aboutContent').style.display = 'none';
    document.querySelector('#subNavbar').style.display = 'block';
    clearChartsContainer();
}

function showAbout() {
    document.querySelector('#homeContent').style.display = 'none';
    document.querySelector('#chartsContent').style.display = 'none';
    document.querySelector('#aboutContent').style.display = 'block';
    document.querySelector('#subNavbar').style.display = 'none';
    clearChartsContainer();
}

function clearChartsContainer() {
    const lineChartsContainer = document.querySelector('#lineChartsContainer');
    lineChartsContainer.innerHTML = '';
}

function showApplications() {
    showCharts();
    clearChartsContainer();

    const applications = ["Macao", "Delaware-deposit-Plastic", "index-Consultant-blue", "Integrated-SDD", "Accountability-Clothing",
        "Philippines-THX", "info-mediaries", "AI-Administrator-capability", "firewall-Towels-compressing",
        "Officer", "Triple-buffered-Brand", "program-compelling", "Corporate-Electronics", "Multi-tiered",
        "global-Rustic", "Cambridgeshire-next-Springs", "Bike-Hawaii-Naira", "Health", "seamless-Arkansas-payment",
        "Markets-payment-Shoes", "Solutions", "Industrial", "Locks-integrated", "EXE", "redundant-copy-action-items",
        "Regional-Table", "Licensed-Account-paradigms", "auxiliary-Granite", "calculating", "zero", "markets-reboot-Avon",
        "Account-Pizza-cross-media", "Computers", "Granite", "Computers-Fresh", "User-centric",
        "Palau-redundant-solution-oriented", "Dakota-Future-proofed-SCSI", "Maine-Avon", "Loti", "Wooden-Health",
        "Table-Flats-Electronics", "Territory-e-markets", "forecast-Games", "Gloves", "red-Facilitator", "1080p-Lock",
        "mobile-transmit", "interface-deliver"];

    applications.forEach(application => {
        fetchData(`https://engineering-task.elancoapps.com/api/applications/${application}`, application);
    });

    async function fetchData(url, label) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Extract data for the chart (modify this based on your data structure)
            const labels = data.map(entry => entry.Date);
            const costs = data.map(entry => parseFloat(entry.Cost));

            const lineChartsContainer = document.querySelector('#lineChartsContainer');
            const canvasElement = document.createElement('canvas');
            canvasElement.style.width = '400px';
            canvasElement.style.height = '200px';
            lineChartsContainer.appendChild(canvasElement);

            new Chart(canvasElement.getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: costs,
                        fill: false,
                        borderColor: getRandomColor(),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            labels: labels,
                            beginAtZero: true,
                            title: { display: true, text: 'Date' }
                        },
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Cost' }
                        }
                    }
                }
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

function showResources() {
    showCharts();
    clearChartsContainer();

    const resources = ["Logic Apps", "Azure App Service", "Storage", "Virtual Machines", "Virtual Machines Licenses",
        "Virtual Network", "Log Analytics", "Advanced Threat Protection", "Bandwidth", "Key Vault",
        "Azure Cosmos DB", "Redis Cache", "Container Registry", "Azure Database for PostgreSQL",
        "Azure Data Factory v2", "Security Center", "Insight and Analytics", "Advanced Data Security",
        "Azure DNS", "Azure Front Door Service", "Network Watcher", "Azure Cognitive Search",
        "API Management", "Power BI Embedded"];

    resources.forEach(resource => {
        fetchData(`https://engineering-task.elancoapps.com/api/resources/${resource}`, resource);
    });

    async function fetchData(url, label) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Extract data for the chart (modify this based on your data structure)
            const dates = data.map(entry => entry.Date);
            const costs = data.map(entry => parseFloat(entry.Cost));

            const lineChartsContainer = document.querySelector('#lineChartsContainer'); const canvasElementCost = document.createElement('canvas');
            canvasElementCost.style.width = '400px';
            canvasElementCost.style.height = '200px';
            canvasElementCost.style.marginBottom = '20px';
            lineChartsContainer.appendChild(canvasElementCost);

            new Chart(canvasElementCost.getContext('2d'), {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: label,
                        data: costs,
                        fill: false,
                        borderColor: getRandomColor(),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            labels: dates,
                            beginAtZero: true,
                            title: { display: true, text: 'Date' }
                        },
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Cost' }
                        }
                    }
                }
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
