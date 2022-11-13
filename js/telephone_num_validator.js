function telephoneCheck(str) {
    let validFormats = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/g;

    if (validFormats.test(str) == true) {
        return true
    } else {
        return false
    }
}

telephoneCheck("555-555-5555");
