export function generateRandom(type) {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbs ='0123456789';

    function generateString(length,char) {
    let result = '';
    const charactersLength = char.length;
    for ( let i = 0; i < length; i++ ) {
        result += char.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
if (type === "GST") {
    const stateCode = String(Math.floor(1 + Math.random() * 36)).padStart(2, '0');
    return `${stateCode}${generateString(5,characters)}${generateString(4,numbs)}${generateString(1,characters)}1Z5`;
} else if (type === "PAN") {
return `${generateString(5,characters)}${generateString(4,numbs)}${generateString(1,characters)}`;   
} 

}