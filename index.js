function writeCards(names, event){
    const thanksMsgs = [];
    for(let i=0; i <= names.length - 1; i++){
        thanksMsgs.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return thanksMsgs;
}

function countDown(number){
    for(let i = number; i>=0; i--){
        console.log(i);
    }
}
