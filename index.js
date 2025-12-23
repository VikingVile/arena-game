const name1 = "Warrior";
const name2 = "Enemy";
let emoji; 

let hp1 = 520;
let hp2 = 280;

let dmg1 = 81;
let dmg2 = 112;

let turn = 1;

while (hp1 > 0 && hp2 >0) {
    const dmg1 = Math.floor(Math.random()*12) +86;
    hp2 -= dmg1;
    console.log(`${name1} hits ${name2} for ${dmg1} ⚔️  ${name2} HP: ${Math.max(0,hp2)}`);
    if (hp2 > 0){
        const dmg2 = Math.floor(Math.random()*15) +98;
        hp1 -= dmg2;
        console.log(`${name2} hits ${name1} for ${dmg2} ⚔️  ${name1} HP: ${Math.max(0,hp1)}`);
    }
    if (hp1 > 0 && hp1 < 0.09 * 1520) {
        const heal1 = Math.floor(Math.random() * 51) + 65;
        hp1 = Math.min(1520, hp1 + heal1);
        console.log(`${name1} casts self - heal ${heal1} HP: ${hp1}`);    
        }
        if (hp2 > 0 && hp2 < 0.12 * 1280){
            const heal2 = Math.floor(Math.random() * 51) + 60;
            hp2 = Math.min(1280, hp2 + heal2);
            console.log(`${name2} casts self - heal ${heal2} HP: ${hp2}`);

            const crit1 = Math.random() < 0.10;
            if (crit1) {
                const critdmg1 = 1 * 2;
                hp2 -= critdmg1;
                console.log(`💥 CRITICAL ${name1} hits ${name2} for ${critdmg1} HP: ${Math.max(0, hp2)}`);
            }

            const crit2 = Math.random() < 0.10;
            if (crit2) {
                const critdmg2 = 1 * 2;
                hp1 -= critdmg2;
                console.log(`💥 CRITICAL ${name2} hits ${name1} for ${critdmg2} HP: ${Math.max(0, hp1)} `);
            }
        } 
        turn++
    }
    


const winner = hp1 > 0 ? name1 : name2;
console.log(winner + " Wins 🏆");






