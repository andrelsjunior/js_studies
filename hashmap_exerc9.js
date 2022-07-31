function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

function encode(phrase) {
    
    map_encode = {"a":1, "e":2, "i":3, "o":4, "u":5}

    encoded_phrase = ""
    
    for(letter of phrase) {
        encoded_phrase += get(map_encode, letter, letter);
    } console.log('The phrase has been decoded as:', encoded_phrase)
      return encoded_phrase;
}

encode("vai tourinho!")

function decode(phrase) {
    
    map_decode = {"1":"a", "2":"e", "3":"i", "4":"o", "5":"u"}

    decoded_phrase = ""
    
    for(letter of phrase) {
        decoded_phrase += get(map_decode, letter, letter);
    } console.log('The phrase has been decoded as:', decoded_phrase)
      return decoded_phrase;
}  

decode("v13 t45r3nh4!")