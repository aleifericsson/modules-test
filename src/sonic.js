const sonic = (repeats) => {
    const sonicChars = ["Sonic", "Shadow", "Silver", "Knuckles", "Tails", "Amy", "Blaze", "Whisper", "Tangle", "Rouge"];
    const charNum = Math.floor(Math.random()*sonicChars.length);
    let text = ""
    for(let i=0;i<repeats;i++){
        text = [text, sonicChars[charNum]].join(" ");
    }
    return text
}

export default sonic;