//Este é o estilo javascript da pagina principal.
document.getElementById('v-1').src = 'smile_child.mp4'
    
    
        function mudar (){
            document.getElementById('mudar').innerHTML = 'CHEGOU O JAVASCRIPT!'
            document.getElementById('mudar').style.color = 'blue'
            document.getElementById('mudar').style.fontSize = '3em'
            document.getElementById('mudar').style.textAlign = 'center'
        }
    
        function voltar (){
            document.getElementById ('mudar').innerHTML = 'A importancia de javaScript'
        }
    
    
    document.getElementById("demo").innerHTML = "My First JavaScript"
    document.getElementById ("ti").style.fontSize = '5em'
    document.getElementById('ti').style.color = 'red'
    document.getElementById('parag').style.display = ''
    
    
    document.getElementById('botao').style.backgroundColor = 'blue'
    document.getElementById('botao').style.padding = '10px'
    document.getElementById('botao').style.color = 'white'
    document.getElementById('botao').style.borderRadius = '12px'
    document.getElementById('botao').style.fontSize = '2em'
    document.getElementById('botao').style.border = '4px solid red'


    // Acessando ojecto javaScript
    const meuObj = {nome: "José Baptista", idade: "40 Anos", cidade: "Luanda"}
    document.getElementById('id-1').innerHTML = meuObj.nome
    document.getElementById('id-1').innerHTML = meuObj.idade
    document.getElementById('id-1').innerHTML = meuObj.cidade