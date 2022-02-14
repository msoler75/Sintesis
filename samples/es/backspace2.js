// https://codeforces.com/problemset/problem/1553/D


function long(s) {
    return s.length
}

function sub(s, a, b) {
    return s.substring(a, b)
}

function buscar(s, a) {
    return s.indexOf(a)
}


function backspace2(s, t) {

    const ls = long(s)

    var encontrado = false

    function procesar(objetivo, palabra, secuencia) {

        if(encontrado) return []

        if(1) {
            var spaces = sub("                      ", long(secuencia))
            console.log(objetivo, secuencia,spaces+palabra)
        }

        var resultados = []

        if (palabra == objetivo)
        {
            console.log('!')
            if(objetivo===t && long(secuencia)==ls) {
                encontrado = true
                return []
            }
            resultados.push({
                palabra,
                secuencia
            })
        }

        // optimización
        var restante = sub(s, long(secuencia))
        for (var i = 0; i < long(objetivo); i++) {
            var letra = objetivo.charAt(i)
            if(buscar(palabra, letra)<0 && buscar(restante, letra)<0) 
                return resultados
        }

        if (long(secuencia) == ls)
            return resultados

        var pos = long(secuencia)
        var letra = sub(s, pos, pos + 1)

        // posibilidad 1 : pulsa backspace
        var resultados1 = procesar(objetivo, long(palabra) > 0 ? sub(palabra, 0, long(palabra) - 1) : "", secuencia + "0")

        // posibilidad 2 : pulsa letra
        var resultados2 = procesar(objetivo, palabra + letra, secuencia + "1")

        return resultados.concat(resultados1, resultados2)
    }


    var palabra = ''
    var objetivo = ''
    var resultados = [{palabra: '', secuencia: ''}]
    for (var i = 0; i < long(t); i++) {
        palabra = objetivo
        var letra = t.charAt(i)
        objetivo += letra
        var r = []
        for (var j = 0; j < resultados.length; j++) {
            r = r.concat(
                procesar(objetivo, resultados[j].palabra, resultados[j].secuencia)
            )
            if(encontrado) return true
        }
        resultados = r
        if (!resultados.length) return false // si no hay para este objetivo ya no seguimos
    }

    return false
}

console.log(backspace2('ababaa', 'aba'))