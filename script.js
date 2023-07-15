var ind_imagem = 1;
var opacidade = 1;
var reduzir = true;
var id_trocar,id_mover,id_opacidade

function trocar_imagem() {
  let imagem = document.getElementById("imagem");
  ind_imagem++;

  if (ind_imagem > 7) ind_imagem = 1;

  imagem.src = "https://softgraf.com/img/img" + ind_imagem + ".jpg";
}

function mudar_opacidade() {
  let imagem = document.getElementById("imagem");

  if (opacidade <= 0.1)
      reduzir = false
   else if (opacidade >=1)
         reduzir = true

  if (reduzir)
    // se reduzir = true
      opacidade -= 0.1;
  else 
      opacidade += 0.1;

  imagem.style.opacity = opacidade;
}

function mover_imagem(){
  
      let imagem = document.getElementById('imagem')
      margem_esq =  parseInt (imagem.style.marginLeft)
      let largura_tela = window.innerWidth
      let largura_img = imagem.clientWidth


   if (Number.isNaN(margem_esq))
      margem_esq = 50
   else
      margem_esq += 50
      
     
    if (margem_esq > largura_tela)
      margem_esq = -largura_img

   imagem.style.marginLeft = margem_esq + 'px'
}

   function auto_trocar(){
      id_trocar = setInterval('trocar_imagem()', 1000)
   }

   function auto_opacidade(){
       id_opacidade = setInterval('mudar_opacidade()',100)
   }

   function auto_mover(){
      id_mover = setInterval('mover_imagem()', 40)
   }


    function limpar_intervalos(){
      clearInterval(id_trocar)
      clearInterval(id_opacidade)
      clearInterval(id_mover)
    }