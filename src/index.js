function definirHankeadas(saldoVitorias, derrotas){
    let saldo = saldoVitorias - derrotas
    let nivel

    if(saldoVitorias <= 10){
        nivel = "Ferro"
    }else if(saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze"
    }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"
    }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro"
    }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante"
    }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendario"
    }else{
        nivel = "Imortal"
    }

    console.log(`O Herói com saldo total de ${saldo} e ${saldoVitorias} vitórias está no nível ${nivel}`);
    
}

definirHankeadas(102,5)