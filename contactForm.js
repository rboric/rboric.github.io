function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("name").value,
        message:document.getElementById("message").value,
        email:document.getElementById("email").value,
    };

    emailjs.send('gmail', 'template_qr04209', tempParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

     alert("Poruka poslana uspješno!");

}