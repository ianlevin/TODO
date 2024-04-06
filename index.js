function newElement(){
    var escrito = document.getElementById("escrito").value
    var todo = {
        texto: escrito,
        fechaEscrito: Date.now(),
        fechaHecho: null,
        estado: true
    }
    arrayTodos.push(todo)

    escribirTodos()
}


function escribirTodos(){
    eliminarHijo("myUL")
    var ul = document.getElementById("myUL")

    for(let i = 0; i<arrayTodos.length; i++){

        if(arrayTodos[i].estado == true){
            let li = document.createElement("li")
            li.setAttribute("id", i)
            ul.appendChild(li)
                
            let btn = document.createElement("input")
            let texto = document.createTextNode(arrayTodos[i].texto)
            li.appendChild(texto)

            btn.setAttribute("type", "checkbox")
            btn.setAttribute("id", `ck${i}`)
            btn.setAttribute("onclick", `tachar(${i})`)
            li.appendChild(btn)
        }
    }

    for(let i = 0; i<arrayTodos.length; i++){
        if(arrayTodos[i].estado == false){
            let li = document.createElement("li")
            li.setAttribute("id", i)
            ul.appendChild(li)
                
            let btn = document.createElement("input")
            li.innerHTML = `<del>${arrayTodos[i].texto}</del>`

            btn.setAttribute("type", "checkbox")
            btn.setAttribute("id", `ck${i}`)
            btn.setAttribute("onclick", `tachar(${i})`)
            btn.checked = true
            li.appendChild(btn)
        }
    }
    document.getElementById("escrito").value = ""
}



function tachar(id){
    if(arrayTodos[id].estado){
        arrayTodos[id].estado = false
        arrayTodos[id].fechaHecho = Date.now()
    }else{
        arrayTodos[id].estado = true
    }
    
    escribirTodos()
}

function eliminarHijo(padreid)
 {
    var elemento = document.getElementById(padreid)
    while(elemento.hasChildNodes())
	elemento.removeChild(elemento.firstChild)
 }

function botonTodo(){
    let texto = document.getElementById("tareamasrapida")
    let resta = (arrayTodos[0].fechaHecho) - (arrayTodos[0].fechaEscrito)
    texto.innerHTML = `La tarea que mas rapido se realizo fue`
    console.log(Math.round(resta))
}

function obtnerTareaMasRapida(){
    let tareaMasRapida = 0
    let tareaMasRapidaId
    for(let i = 0; i<arrayTodos.length; i++){
        if(tareaMasRapida < Math.round((arrayTodos[i].fechaHecho) - (arrayTodos[i].fechaEscrito))){
            tareaMasRapida = Math.round((arrayTodos[i].fechaHecho) - (arrayTodos[i].fechaEscrito))
            tareaMasRapidaId = i
        }
    }
    console.log(tareaMasRapidaId)
    return tareaMasRapidaId
}

var arrayTodos = []