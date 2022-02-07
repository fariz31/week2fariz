function showData() {
    // DOM mengambil nilai
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    // DOM mengirim nilai
    document.getElementById("input-name").value = ""

    //validation
    if (name == "") {
        alert('Name input must not be empty')
    }
    if (email == "") {
        alert('Email input must not be empty')
    }
    if (phone == "") {
        alert('phone input must not be empty')
    }
    if (message == "") {
        alert('message input must not be empty')
    }
    if (subject == "") {
        alert('subject input must not be empty')
    }

    // Email Process
    // DOM membuat element
    let emailReceiver = 'rhomairama@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${subject}, ${message}, this is my phone ${phone}. Please contact me ASAP`

    // a.click()

    //Object
    let dataObject = {
        dataName: name,
        dataEmail: email,
        phone,
        subject,
        message
    }

    console.table(dataObject);

}
