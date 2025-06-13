const fogueiraImg = document.getElementById('fogueira');
const botaoFogueira = document.getElementById('botao_fogueira');

const mensagemAcesa = document.getElementById('apertouNaFogueiraAcesa');
const mensagemApagada = document.getElementById('apertouNaFogueiraApagada');
const fundoMensagem = document.getElementById('fundoMensagem');

let fogueiraAcesa = false;

function esconderMensagensDeAviso() {
    mensagemAcesa.classList.add('hidden');
    mensagemAcesa.classList.remove('visible');
    mensagemApagada.classList.add('hidden');
    mensagemApagada.classList.remove('visible');
    fundoMensagem.classList.add('hidden');
    fundoMensagem.classList.remove('visible');
}

botaoFogueira.addEventListener('click', () => {

    esconderMensagensDeAviso();

    if ( fogueiraAcesa ) {
        fogueiraImg.src = './midia/fogueira_apaga.png';
        fogueiraAcesa = false;
        botaoFogueira.textContent = 'Aperte para acender';     
    } 
    else {
        fogueiraImg.src = './midia/fogueira_acesa.gif';
        fogueiraAcesa = true;
        botaoFogueira.textContent = 'Aperte para apagar';  
    }
});

fogueiraImg.addEventListener('click', () => {
        
    esconderMensagensDeAviso();

    if ( fogueiraAcesa ) {
        mensagemAcesa.classList.add('visible');
        mensagemAcesa.classList.remove('hidden');    
    } 
    else {
        mensagemApagada.classList.add('visible');
        mensagemApagada.classList.remove('hidden'); 
    }

    fundoMensagem.classList.add('visible');
    fundoMensagem.classList.remove('hidden');

    setTimeout(() => {
        esconderMensagensDeAviso();
    }, 1000);
});