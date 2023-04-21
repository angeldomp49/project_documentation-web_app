
export class Translator{

    lang: string;

    constructor(lang: string){
        this.lang = lang;
    }

    async _(text: string): Promise<string>{

        let translatedText = text;
        let filename = `./${this.lang}.json`;

        let response = await fetch(filename).then( response => response.json());

        translatedText = response[text];

        if(translatedText == null){
            translatedText = text;
        }

        return translatedText;
    }

}