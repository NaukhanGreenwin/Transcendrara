// Convert HTML form to PDF
window.onload = function() {
    // Add a button to convert to PDF
    const container = document.querySelector('body');
    const printButton = document.createElement('button');
    printButton.innerText = 'Download as PDF';
    printButton.style.display = 'block';
    printButton.style.margin = '30px auto';
    printButton.style.padding = '10px 20px';
    printButton.style.backgroundColor = '#6a0dad';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '4px';
    printButton.style.cursor = 'pointer';
    printButton.style.fontSize = '16px';
    
    printButton.onclick = function() {
        // Hide the button before printing
        printButton.style.display = 'none';
        
        // Print the document
        window.print();
        
        // Show the button again
        setTimeout(function() {
            printButton.style.display = 'block';
        }, 1000);
    };
    
    container.prepend(printButton);
    
    // Add another button at the bottom
    const bottomPrintButton = printButton.cloneNode(true);
    bottomPrintButton.onclick = printButton.onclick;
    container.appendChild(bottomPrintButton);
}; 