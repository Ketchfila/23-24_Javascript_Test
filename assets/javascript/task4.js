/* Put code for the task below */
    // Function to open a new page
    function openNewPage() {
    window.open('Blankpge.html', '_blank');
    // You can replace 'new_page.html' with the URL of the page you want to open
}
    // Adding click event listener to the button
    document.getElementById('newPageButton').addEventListener('click', openNewPage);
