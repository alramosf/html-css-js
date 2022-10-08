var intervald = window.setInterval(() => {carregar()
        
},1000);
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date() 
    //var hora = data.toLocaleTimeString() // pega hora da maquina
    var hora = data.getHours()
    //var hora = 19
    //var minutos = data.getMinutes()
    //var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        //img.src = "manha.png"
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#9e8052'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        //img.src = 'tarde.png'
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#fd7601'
    } else { 
        //Boa noite!
        //img.src = 'noite.png'
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#1e1c1f'
    }
  
}

