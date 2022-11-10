function rot13(str) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '?') { // .search from line 9 breaks for '?' mark, so 
            arr.push('?') // we put it here
        } else {
            let x = alpha.search(str[i]);

            if ((str[i] == '!') ||
                (str[i] == ' ') ||
                (str[i] == '.')) {
                arr.push(str[i]);
            } else {
                let y = alpha[x - 13];
                let z = x - 13;

                if (z < 0) {
                    y = alpha[x + 13];
                }

                arr.push(y);
            }
        }
    }

    return arr.join('');
}

rot13("SERR YBIR?");
