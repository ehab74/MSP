function printData(){
    var fname = document.getElementsByName("fname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var email = document.getElementsByName("mail")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var gender = document.getElementsByName("Gender")[0].value;
    var password = document.getElementsByName("pass")[0].value;
    var html = "<!DOCTYPE HTML>\
    <html>\
        <head>\
            <title>inputData</title>\
            <link href='signstyle.css' rel='stylesheet' type='text/css'>\
        </head>\
        <body>\
        <div  style ='margin-top: 110px; font-size:40px; color:white;' >\
                 <h1><center><b>Info</b></center></h1>\
         </div>\
            <div id = 'outform' '>\
                <div id = 'output'>\
                <p>First name: " + fname + "</p>\
                </div>\
                <div id = 'output'>\
                <p>Last name: " + lname + "</p>\
                </div>\
                <div id = 'output'>\
                <p>Email: " + email + "</p>\
                </div>\
                <div id = 'output'>\
                <p>Phone number: " + phone + "</p>\
                </div>\
                <div id = 'output'>\
                <p>Gender: " + gender + "</p>\
                </div>\
                <div id = 'output'>\
                <p>Password: " + password + "</p>\
                </div>\
            </div> </body>\</html>";
    var newWindow = window.open()
    newWindow.document.write(html)
}