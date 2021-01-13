import Dictionary from "./Dictionary";

class i18n{
    static currentLang = "en"
    static convert(key, strings, lang){
        return Dictionary[key][this.currentLang]
    }
}

export default i18n;