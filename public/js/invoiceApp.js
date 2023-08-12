let invoiceItems = [];
let totalAmount = 0;

function addItem() {
    const service = document.getElementById('service').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    invoiceItems.push({ service, hours, rate });

    displayItems();
    updateTotal();
}

function displayItems() {
    const list = document.getElementById('invoiceItemsList');
    list.innerHTML = '';

    invoiceItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.service} - ${item.hours} hours x $${item.rate.toFixed(2)}`;
        list.appendChild(listItem);
    });
}

function updateTotal() {
    totalAmount = invoiceItems.reduce((total, item) => total + item.hours * item.rate, 0);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function sendInvoice() {
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const invoiceDetails = generateInvoiceDetails();

    // Replace the following line with your own logic to send the invoice to the customer
    alert(`Invoice Details\nCustomer Email: ${customerEmail}\nCustomer Phone: ${customerPhone}\n\n${invoiceDetails}`);
}

function generateInvoiceDetails() {
    let invoiceDetails = "Invoice Items:\n";
    invoiceItems.forEach(item => {
        const totalPerItem = item.hours * item.rate;
        invoiceDetails += `${item.service} - ${item.hours} hours x $${item.rate.toFixed(2)} = $${totalPerItem.toFixed(2)}\n`;
    });

    invoiceDetails += `\nTotal Amount: $${totalAmount.toFixed(2)}`;
    return invoiceDetails;
}

document.getElementById('invoiceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    addItem();
});

document.getElementById('sendInvoiceBtn').addEventListener('click', function () {
    sendInvoice();
});
