// index.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display awareness content
    fetch('db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.incidents) {
          displayIncidents(data.incidents);
        } else {
          console.error('No incidents found in the data');
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  
    // Handle report form submission
    const reportForm = document.getElementById('report-form');
    reportForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitReport();
    });
  });
  
  // Function to display incidents
  function displayIncidents(incidents) {
    const incidentList = document.getElementById('incident-list');
    incidentList.innerHTML = '';
  
    incidents.forEach(incident => {
      const incidentItem = document.createElement('div');
      incidentItem.classList.add('incident-item');
      incidentItem.innerHTML = `
        <h3>${incident.type.replace('-', ' ').toUpperCase()}</h3>
        <p>${incident.description}</p>
      `;
      incidentList.appendChild(incidentItem);
    });
  }
  
  // Function to submit a new report
  function submitReport() {
    const type = document.getElementById('incident-type').value;
    const description = document.getElementById('incident-description').value;
    const location = document.getElementById('incident-location').value;
    
    const newIncident = {
      id: Date.now(),
      type: type,
      description: `${description} Location: ${location}`
    };
  
    // In a real application, you would send this data to the server
    // For this example, we will simply append it to the current list
    const incidentList = document.getElementById('incident-list');
    const incidentItem = document.createElement('div');
    incidentItem.classList.add('incident-item');
    incidentItem.innerHTML = `
      <h3>${newIncident.type.replace('-', ' ').toUpperCase()}</h3>
      <p>${newIncident.description}</p>
    `;
    incidentList.appendChild(incidentItem);
  
    // Clear the form
    document.getElementById('report-form').reset();
  
    // Show success message
    const reportResponse = document.getElementById('report-response');
    reportResponse.textContent = 'Report submitted successfully';
    setTimeout(() => {
      reportResponse.textContent = '';
    }, 3000);
  }