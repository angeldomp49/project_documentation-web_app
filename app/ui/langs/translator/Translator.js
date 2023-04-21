
export class Translator{

    lang;

    constructor(lang){
        this.lang = lang;
    }

    _(text, setText){

        let traslatedText = text;
        let filename = `./${this.lang}.json`;
        fetch(filename)
            .then( response => response.json())
            .then( response => {
                traslatedText = response[text];

                if(traslatedText == null){
                    traslatedText = text;
                }

                setText(traslatedText);

                console.log("file loaded")
            })
            .catch( err => {
                console.warn("Error loading language file: " + filename);
            });
    }

}