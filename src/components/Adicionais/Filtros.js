export const PorNomeUser = (colecaoUser, nome) => {
    var j = 0;
    let userColection = [];
    let Nomecolecao
  // let Nomecolecao1
    let Nomeenviado

    for (let i = 0; i < colecaoUser.length; i++) {
        if (colecaoUser[i].name !== null && colecaoUser[i].name !== "") {
            Nomecolecao = SubstituirAcento(colecaoUser[i].name.toLowerCase()) // aqui converto em string minusculo sem acento
           // Nomecolecao1 = SubstituirAcento(colecaoUser[i].owner.login.toLowerCase())
            Nomeenviado = SubstituirAcento(nome.toLowerCase());
            if ((Nomecolecao.indexOf(Nomeenviado) !== -1 && Nomecolecao.indexOf(Nomeenviado) !== '')/* || (Nomecolecao1.indexOf(Nomeenviado) !== -1)*/) {
                userColection[j++] = colecaoUser[i]
            }
        }
    }
    return userColection;
}

export const FiltroUser = (colecaoUser, nome) => {

    let colecaoUser1 = PorNomeUser(colecaoUser, nome)
     // sort by one attribute
    sortArray(colecaoUser1, "name"); // Asc
        return colecaoUser1  
}

export const FiltroCompany = (colecaoCopany, nome) => {
    let colecaoCompany1 = PorNomeCompany(colecaoCopany, nome)
    // sort by one attribute
    sortArray(colecaoCompany1, "login"); // Asc
        return colecaoCompany1
  
}

export const PorNomeCompany = (colecaoUser, nome) => {
    var j = 0;
    let userColection = [];
    let Nomecolecao
  // let Nomecolecao1
    let Nomeenviado

    for (let i = 0; i < colecaoUser.length; i++) {
        if (colecaoUser[i].login !== null && colecaoUser[i].login !== "") {
            Nomecolecao = SubstituirAcento(colecaoUser[i].login.toLowerCase()) // aqui converto em string minusculo sem acento
           // Nomecolecao1 = SubstituirAcento(colecaoUser[i].owner.login.toLowerCase())
            Nomeenviado = SubstituirAcento(nome.toLowerCase());
            if ((Nomecolecao.indexOf(Nomeenviado) !== -1 && Nomecolecao.indexOf(Nomeenviado) !== '')/* || (Nomecolecao1.indexOf(Nomeenviado) !== -1)*/) {
                userColection[j++] = colecaoUser[i]
            }
        }
    }
    return userColection;
}

export const SubstituirAcento = (valor) => {
    let caracteres = {

        "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u",

        "à": "a", "è": "e", "ì": "i", "ò": "o", "ù": "u", "ñ": "n", "ç": "c",

        "Á": "A", "É": "E", "Í": "I", "Ó": "O", "Ú": "U",

        "À": "A", "È": "E", "Ì": "I", "Ò": "O", "Ù": "U", "Ñ": "N", "Ç": "C",

        "â": "a", "ê": "e", "î": "i", "ô": "o", "û": "u",

        "Â": "A", "Ê": "E", "Î": "I", "Ô": "O", "Û": "U",

        "ã": "a", "õ": "o",

        "Ã": "A", "Õ": "O",
    }

    var expr = /[áàâãéèêíîìóòôõúùûñç]/ig;

    var res = valor.replace(expr, function (e) { return caracteres[e] });

    return res;

}

export const sortArray = (array, property, direction) => {
    direction = direction || 1;
    array.sort(function compare(a, b) {
        let comparison = 0;
        if (a[property] > b[property]) {
            comparison = 1 * direction;
        } else if (a[property] < b[property]) {
            comparison = -1 * direction;
        }
        return comparison;
    });
    return array;
}
