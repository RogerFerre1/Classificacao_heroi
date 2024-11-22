nome = "Rogin"
xp = 3600
elo = " "

if (xp <= 1000){
    elo = "Ferro"
} else if(xp >= 1001 && xp <= 2000){
    elo = "Bronze"
} else if(xp >= 2001 && xp <= 3000){
    elo = "Prata"
} else if(xp >= 3001 && xp <= 4000){
    elo = "Ouro"
} else if(xp >= 4001 && xp <= 5000){
    elo = "platina"
} else if(xp >= 5001 && xp <= 6000){
    elo = "Diamante"
} else if(xp >= 6001 && xp <= 7000){
    elo = "Ascendente"
} else if(xp >= 7001 && xp <= 8000){
    elo = "Imortal"
} else if(xp >= 8001 && xp <= 9000){
    elo = "Radiante"
}

console.log(`O Player ${nome} está no elo ${elo}`)
