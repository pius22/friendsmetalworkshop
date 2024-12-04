function sendWhatsAppMessage() {
    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const phoneSenderNumber = document.getElementById("phoneSenderNumber").value;
    const senderMessage = document.getElementById("SenderMessage").value;
    
    // Define the recipient phone number (replace with the desired number)
    const phoneNumber = "+256701858924";
    
    // Construct the message with line breaks
    const whatsappMessage = `Hello,%0A%0AMy name is ${encodeURIComponent(name)}.%0A` +
                            `My email is ${encodeURIComponent(email)}.%0A` +
                            `Subject: ${encodeURIComponent(subject)}%0A` +
                            `Phone: ${encodeURIComponent(phoneSenderNumber)}%0A` +
                            `Message: ${encodeURIComponent(senderMessage)}`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open the WhatsApp URL
    window.open(whatsappUrl, "_blank");
}
