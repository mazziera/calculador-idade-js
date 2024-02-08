const anoNascimento = document.querySelector("#ano-nascimento");
const botaoVerificar = document.querySelector('.botao-verificar');
let resultado = document.querySelector('.resultado');


botaoVerificar.addEventListener('click', () => {
    const data = new Date() // Cria um objeto Date com a data e horas atuais.
    let anoAtual = data.getFullYear()
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto');

    if(anoNascimento.value.length === 0 || parseInt(anoNascimento.value) > anoAtual){
        alert("O ano de nascimento não é válido!")

    } else{
        let idade = anoAtual - parseInt(anoNascimento.value)
        
        const genero = document.getElementsByName("input-sexo")
        let sexo = '';

        if(genero[0].checked){
            sexo = 'Mulher'

            if(idade >= 0  &&  idade <= 12 ){
                imagem.setAttribute('src', 'src/imagens/menina.webp');

            } else if(idade <= 30){
                imagem.setAttribute('src', 'src/imagens/mulher-jovem.webp');

            }else if(idade > 30 && idade <= 60){
                imagem.setAttribute('src', 'src/imagens/mulher-adulta.webp');

            }else{
                imagem.setAttribute('src', 'src/imagens/mulher-idosa.jpeg');
            }
           

        } else if(genero[1].checked){
            sexo = 'Homem'

            if(idade >= 0  &&  idade <= 12 ){
                imagem.setAttribute('src', 'src/imagens/menino.jpg');

            } else if(idade <= 30){
                imagem.setAttribute('src', 'src/imagens/homem-jovem.jpeg');

            } else if(idade > 30 && idade <= 60){
                imagem.setAttribute('src', 'src/imagens/homem adulto.webp');

            } else{
                imagem.setAttribute('src', 'src/imagens/homem-idoso.webp');
            }
        }


        resultado.innerHTML = `Detectamos ${sexo}, com ${idade} anos!`;
        resultado.style.marginTop = '30px';
        resultado.style.textAlign = 'center';
        resultado.appendChild(imagem);

        imagem.style.width = '320px';
        imagem.style.height = '300px'
        imagem.style.padding = "10px";
        imagem.style.borderRadius = "50%";
        imagem.style.marginTop = "20px";
        imagem.style.boxShadow = " 3px 7px 35px 5px rgba(0, 0, 0, 0.432)";
    }
});