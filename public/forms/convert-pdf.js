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
    printButton.className = 'no-print';
    
    printButton.onclick = function() {
        // Hide the button before printing
        const allButtons = document.querySelectorAll('.no-print');
        allButtons.forEach(btn => btn.style.display = 'none');
        
        // Print the document
        window.print();
        
        // Show the button again
        setTimeout(function() {
            allButtons.forEach(btn => btn.style.display = 'block');
        }, 1000);
    };
    
    container.prepend(printButton);
    
    // Add another button at the bottom
    const bottomPrintButton = printButton.cloneNode(true);
    bottomPrintButton.onclick = printButton.onclick;
    container.appendChild(bottomPrintButton);
    
    // Add an event listener to all form elements to save data to localStorage
    const formElements = document.querySelectorAll('input, textarea, select');
    
    // Load saved form data if available
    formElements.forEach(element => {
        const id = element.id;
        if (id) {
            const savedValue = localStorage.getItem('intake_' + id);
            
            if (savedValue !== null) {
                if (element.type === 'checkbox' || element.type === 'radio') {
                    if (element.value === savedValue) {
                        element.checked = true;
                    }
                } else {
                    element.value = savedValue;
                }
            }
            
            // Save changes to localStorage
            element.addEventListener('change', function() {
                if (element.type === 'checkbox' || element.type === 'radio') {
                    if (element.checked) {
                        localStorage.setItem('intake_' + id, element.value);
                    }
                } else {
                    localStorage.setItem('intake_' + id, element.value);
                }
            });
        }
    });
    
    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Clear Form';
    resetButton.style.display = 'block';
    resetButton.style.margin = '10px 0 30px auto';
    resetButton.style.padding = '8px 16px';
    resetButton.style.backgroundColor = '#f44336';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.fontSize = '14px';
    resetButton.className = 'no-print';
    
    resetButton.onclick = function() {
        if (confirm('Are you sure you want to clear all form data? This cannot be undone.')) {
            // Clear form data from localStorage
            formElements.forEach(element => {
                const id = element.id;
                if (id) {
                    localStorage.removeItem('intake_' + id);
                    
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = false;
                    } else {
                        element.value = '';
                    }
                }
            });
        }
    };
    
    // Insert reset button after the top download button
    printButton.insertAdjacentElement('afterend', resetButton);
}; 