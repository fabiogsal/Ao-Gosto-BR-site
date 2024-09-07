
function buscar(){
    let buscarSection = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toUpperCase();

    let resultado = "";
    let sigla = "";
    let estado = "";
    let nome = "";

    if (campoPesquisa == ""){
        buscarSection.innerHTML = "<h2>Campo de pesquisa vazio, é necessário preenche-lo com informações validas.</h2>"
        return;
    }

    for (dado of dados){
        
        sigla = dado.sigla.toUpperCase();
        nome = dado.nome.toUpperCase();
        estado = dado.estado.toUpperCase();
        
        if (estado.includes(campoPesquisa) || sigla.includes(campoPesquisa) || nome.includes(campoPesquisa)){    
            resultado += 
            `        
            <div class="item-resultado"> 
                <h2>
                    ${dado.sigla}: ${dado.nome}
                </h2>
                <h2>Descrição:</h2>
                <p>${dado.descricao}</p>
                <h2>Igredientes:</h2>`;
            
                for (ing of dado.igredientes){
                resultado += `
                <p>•${ing}.</p>`;   
            }
            resultado += `
            <a href="${dado.link}" target="_blank">Mais informações</a>
                </div> ` 
        }
    }
    if (!resultado){
        //buscarSection.innerHTML = '<p>"' + campoPesquisa.toLowerCase() +'" não consta em nosso banco de dados.</p>';

        buscarSection.innerHTML = `
        <div class="item-resultado"> 
        <h2>"${campoPesquisa.toLowerCase()}" não consta em nosso banco de dados</h2>
        </div>
        `;
    } else{
    buscarSection.innerHTML = resultado;
    }
}