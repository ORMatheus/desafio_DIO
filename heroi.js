let heroi="Master chief"
let xp=3001
let tier
console.log("O " +heroi +" Esta no Escalão de nivel:")
if( xp <1000 ){
    tier="ferro"
    console.log("Tier:"+tier)
}else if(xp >1001 && xp < 2000){
    tier="Bronze"
    console.log("Tier:"+tier)
}else if(xp > 2001 && xp < 5000){
    tier="Prata"
    console.log("Tier:"+tier)
}else if(xp >6001 && xp < 7000){
    tier="Ouro"
    console.log("Tier:"+tier)
}else if(xp >7001 && xp < 8000){
    tier="Platina/Diamante "
    console.log("Tier:"+tier)
}else if(xp >8001 && xp < 9000){
    tier="Ascendente"
    console.log("Tier:"+tier)
}else if(xp >9001 && xp < 10000){
    tier="Imortal"
    console.log("Tier:"+tier)
}else if(xp >=10001){
    tier="Radiante"
    console.log("Tier:"+tier)
}


