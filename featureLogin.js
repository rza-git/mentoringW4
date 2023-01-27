// A


// To Login please input
// userName = admin
// password = admin
const userLogin = (userName, password) => {

    if(userName === "admin" && password === "admin") {
        console.log("Authenticated")
    } else {
        console.log("Username or Password is wrong")
    }
}

userLogin("admin", "admin");