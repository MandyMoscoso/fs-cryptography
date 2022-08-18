//A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.

let key = {
    A: "3",
    B: "-",
    C: "#",
    D: ">", 
    E: "&", 
    F: "6", 
    G: "*", 
    H: "$", 
    I: "4", 
    J: "/", 
    K: "~", 
    L: "1", M: "9", N: "<", O: "|", P: "}", Q: "^", R:"{", S: "%", T:"=", U:"D", V:"M", W:"]", X:"[", Y:"C", Z:"@",
};

let string = "tomorrow is friday";
const encrypt = (str) =>{
    str = str.toUpperCase();
    let encrypted = ""
    for (let i of str){
        if(i === " "){
            encrypted+=i
        } else{
            encrypted+=key[i];    
        }
    }
    return encrypted;
}

const decrypt = (str)=>{
    let decrypt="";
    for (let i of str){
        if(i === " "){
            decrypt+=i
        } else{
            decrypt+= Object.keys(key).find(x => key[x] === i);
        }
    }
    return decrypt
}

let string2 = encrypt(string);
console.log(encrypt(string))
console.log(decrypt(string2));