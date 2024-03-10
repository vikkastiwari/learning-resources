function isUpperCase(str) {
    return str === str.toUpperCase()
}

const caesarCipher = (str, key) => {
    let decipher = '';

    for(let i =0;i<str.length;i++){
        if(isUpperCase(str[i])) {
            decipher += String.fromCharCode((str.charCodeAt(i)-65 + key ) % 26 + 65);
        }else{
            decipher += String.fromCharCode((str.charCodeAt(i)-97 + key ) % 26 + 97);
        }
    }
    return decipher;
}

// Input:
console.log(caesarCipher('ATTACKATONCE', 13));
console.log(caesarCipher('Vikas Tiwari', 13));

// Output:
// "NGGNPXNGBAPR"
// "CENFUNAGLNQNI"