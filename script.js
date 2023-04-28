function validation() {
    const password = document.getElementById('password').value

    const passwordCheck = /^ (?=.*[0-9])(?=.*[!@#$%^&*._-])[A-Za-z0-9!@#$%^&*._-]6,19{}$/


    if (passwordCheck.test(password)) {
        document.getElementById('password_error').innerHTML = ""
    }
    else {
        document.getElementById('password_error').innerHTML = "Password must be alphanumeric(@._and -are also allowed)." + "" +
            "At least 8 characters long." + " " +
            "Contains at least one uppercase letter." + " " +
            "Contains at least one lowercase letter." + " " +
            "Contains at least one number." + " " +
            "Contains at least one special character (e.g. @, !, #, $, %, ^, &, *, (, ), -, +)."

        return false
    }


}