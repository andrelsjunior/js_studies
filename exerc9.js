/*
  Para codificar a frase utilizar um encode que recebe uma string
  como parâmetro e deve trocar todas as vogais minúsculas por números, de acordo com o:
  
  a -> 1 | e -> 2 | i -> 3 | o -> 4 | u -> 5
  
  Para decodificar uma frase utilize uma função decode que recebe uma string contendo letras e
  números como parâmetro e deve trocar todos os números por vogais minúsculas , de acordo com o formato:
  
  1 -> a | 2 -> e | 3 -> e | 4 -> o | 5 -> u
  
  TESTAR:   helloparâmetro -> h2ll4
            How are you today? -> H4w 1r2 y45 t4d1y?
            This is an encoding test. -> Th3s 3s 1n 2nc4d3ng t2st.
            go Trybe! -> g4 Tryb2!
*/

function encode(phrase) {
    
    encoded_phrase = []
    
    for(letter of phrase) {
        if(letter === 'a'){
            encoded_phrase.push(1);
        }
        else if(letter === 'e'){
            encoded_phrase.push(2);
        }
        else if(letter === 'i'){
            encoded_phrase.push(3);
        }
        else if(letter === 'o'){
            encoded_phrase.push(4);
        }
        else if(letter === 'u'){
            encoded_phrase.push(5);
        } else {encoded_phrase.push(letter);}     
    }   console.log('The phrase has been encoded as: ', encoded_phrase.join(separator=''))
        return encoded_phrase.join(separator='');
}

function decode(phrase) {
    
    decode_phrase = []
    
    for(letter of phrase) {
        if(letter == 1){
            decode_phrase.push('a');
        }
        else if(letter == 2){
            decode_phrase.push('e');
        }
        else if(letter == 3){
            decode_phrase.push('i');
        }
        else if(letter == 4){
            decode_phrase.push('o');
        }
        else if(letter == 5){
            decode_phrase.push('u');
        } else {decode_phrase.push(letter);}     
    }   console.log('The phrase has been decoded as: ', decode_phrase.join(separator=''))
        return decode_phrase.join(separator='');
}

decode(encode('How are you today?'))