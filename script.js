document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    
    // Add event to list
    const eventList = document.getElementById('eventList');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${eventName} - ${eventDate}`;
    eventList.appendChild(li);
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.textContent = `Event "${eventName}" added successfully!`;
    notification.style.display = 'block';
    setTimeout(() => notification.style.display = 'none', 3000);
    
    // Clear form
    this.reset();
});
