function cadastrar(){
    let nomeValor = document.getElementById('Nometxt')
    let sobrenomeValor = document.getElementById('Sobrenometxt')
    let alturaValor = document.getElementById('Alturatxt')
    let pesoValor = document.getElementById('Pesotxt')
    let idadeValor = document.getElementById('Idadetxt')
    const pessoa = []
    if (nomeValor.value.length === 0 || sobrenomeValor.value.length === 0 || pesoValor.value.length === 0 || idadeValor.value.length === 0 || alturaValor.value.length === 0){
        window.alert('[ERRO] Preencha todos os campos e tente novamente');
        return;
    } 
    
    if (pesoValor.value < 0 || idadeValor.value < 0){
        window.alert('[ERRO] Preencha os campos Peso e idade com valores válidos e tente novamente');
        return;
    }

    if(nomeValor.value.length != 0 || sobrenomeValor.value.length != 0 || pesoValor.value.length != 0 || idadeValor.value.length != 0 || alturaValor.value.length != 0){
        pessoa.push({
            nome: nomeValor.value,
            sobrenome: sobrenomeValor.value,
            idade: idadeValor.value,
            peso: pesoValor.value,
            altura: alturaValor.value
        })
        console.log(pessoa)
        container2.innerHTML = `
        <p>O nome da pessoa cadastrada é: ${nomeValor.value}</p>
        <p>Seu sobrenome é: ${sobrenomeValor.value}</p>
        <p>Sua idade: ${idadeValor.value}</p>
        <p>Seu peso: ${pesoValor.value}kg</p>
        <p>Sua altura é de: ${alturaValor.value}m</p>
        `
        return;
    }
    //container2.innerHTML = `${pessoas}`
}