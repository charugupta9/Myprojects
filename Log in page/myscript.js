function login()
{
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (uname=="world" && pass== "123")
    {
        location.assign("file:///D:/My%20JavaScript%20Projects/Log%20in%20page/login.html")
    }
    else 
    {
        window.alert("login failed");
    }

}