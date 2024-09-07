// Function to display an alert when the button is clicked
document.getElementById("myButton").addEventListener("click", function() {
    alert("Hello, welcome to my page!");
});

// Change background color when hovering over the paragraph
const para = document.getElementById('para');
para.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#d4e157'; // Light green on hover
});

para.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = ''; // Reset to default background color
});
