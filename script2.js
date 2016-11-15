var email = document.querySelector('.email');
var password = document.querySelector('.password');
var signIn = document.querySelector('.signIn');
var signOut = document.querySelector('.signOut');
var labelemail = document.querySelector('.labelemail');
var labelpassword = document.querySelector('.labelpassword');

var preloader = document.querySelector('.preloader');
var error = document.querySelector('.error');

var img = document.querySelector('.img');
var fullname = document.querySelector('.fullname');
var country = document.querySelector('.country');
var hobbies = document.querySelector('.hobbies');

signIn.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    var param = JSON.stringify({
        email: email.value,
        password: password.value
    });
    xhr.open('POST', 'http://netology-hj-ajax.herokuapp.com/homework/login_json');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('loadstart', function() {
        signIn.style.display = 'none';
        preloader.style.display = 'block';
        labelemail.style.display = 'none';
        labelpassword.style.display = 'none';
    });

    xhr.addEventListener('loadend', function() {
        preloader.style.display = 'none';
        signOut.style.display = 'inline';
    });

    xhr.addEventListener('load', function() {
        if(xhr.status >= 200 && xhr.status < 300) {
            var person = JSON.parse(xhr.responseText);
            console.log(person);

            img.src = person.userpic;
            fullname.innerHTML = person.name + ' ' + person.lastname;
            country.innerHTML = person.country;
            hobbies.innerHTML = person.hobbies;

        } else {
            error.style.display = 'block';
        }
    });

    xhr.send(param);
});

signOut.addEventListener('click', function() {
    location.reload();
});
