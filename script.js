// Change the text content
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('content').textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.getElementById('content').style.color = 'blue';
    document.getElementById('content').style.fontSize = '20px';
});

// Add a new element to the page
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph!';
    document.body.appendChild(newElement);
});

// Remove an element from the page
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const elementToRemove = document.getElementById('content');
    elementToRemove.remove();
});
