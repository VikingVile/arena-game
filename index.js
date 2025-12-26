const name1 = "Warrior";
const name2 = "Enemy";
let emoji; 

let mana1 = 100;
let mana2 = 100;
const manacost = 20;

let dmg1 = 81;
let dmg2 = 112;

let hp1 = 1830;
let hp2 = 1380;

let turn = 1;

console.log("𝘼𝙣𝙣𝙤𝙪𝙣𝙘𝙚𝙢𝙚𝙣𝙩: Begin Battle Warrior VS Enemy ‼️ ");

while (hp1 > 0 && hp2 > 0) {
  // ===== Dodge chance (15 % miss entire turn) =====
  const dodge1 = Math.random() < 0.15;
  if (dodge1) {
    console.log(`💨 ${name2} dodged the entire attack!`);
    // skip all Warrior actions
  } else {
    // ===== Warrior entire turn (only if enemy alive) =====
    if (hp2 > 0) {
      const dmg1 = Math.floor(Math.random() * 12) + 81;
      hp2 -= dmg1;
      console.log(`${name1} hits ${name2} for ${dmg1} ⚔️  ${name2} HP: ${Math.max(0, hp2)}`);
    }
    if (mana1 >= manacost) {
      mana1 -= manacost;
      const specialDMG1 = dmg1 * 2;
      hp2 -= specialDMG1;
      console.log(`⚡SPECIAL! ${name1} spends 20 mana for ${specialDMG1} ⚡ Mana left: ${Math.max(0, mana1)}  = = = ${name2} HP: ${Math.max(0, hp2)}`);
    }
    const crit1 = Math.random() < 0.12;
    if (crit1) {
      const critdmg1 = 1 * 2;
      hp2 -= critdmg1;
      console.log(`💥 CRITICAL! ${name1} hits ${name2} for ${critdmg1} HP: ${Math.max(0, hp2)}`);
    }
    if (hp1 > 0 && hp1 < 0.09 * 520) {
      const heal1 = Math.floor(Math.random() * 51) + 65;
      hp1 = Math.min(520, hp1 + heal1);
      console.log(`${name1} casts self-heal 💚 ${heal1} → HP: ${hp1}`);
    }
    if (mana1 < 100) {
      mana1 = Math.min(100, mana1 + 5);
      console.log(`💧 ${name1} regains 5 mana (${mana1}/100)`);
    }
  }

  // ===== Enemy dodge chance (15 % miss entire turn) =====
  const dodge2 = Math.random() < 0.15;
  if (dodge2) {
    console.log(`💨 ${name1} dodged the entire attack!`);
    // skip all Enemy actions
  } else {
    // ===== Enemy entire turn (only if warrior alive) =====
    if (hp1 > 0) {
      const dmg2 = Math.floor(Math.random() * 15) + 112;
      hp1 -= dmg2;
      console.log(`${name2} hits ${name1} for ${dmg2} ⚔️  ${name1} HP: ${Math.max(0, hp1)}`);
    }
    if (mana2 >= manacost) {
      mana2 -= manacost;
      const specialDMG2 = dmg2 * 2;
      hp1 -= specialDMG2;
      console.log(`⚡SPECIAL! ${name2} spends 20 mana for ${specialDMG2} ⚡ Mana left: ${Math.max(0, mana2)} = = = ${name1} HP: ${Math.max(0, hp1)}`);
    }
    const crit2 = Math.random() < 0.10;
    if (crit2) {
      const critdmg2 = 1 * 2;
      hp1 -= critdmg2;
      console.log(`💥 CRITICAL! ${name2} hits ${name1} for ${critdmg2} HP: ${Math.max(0, hp1)}`);
    }
    if (hp2 > 0 && hp2 < 0.12 * 280) {
      const heal2 = Math.floor(Math.random() * 51) + 60;
      hp2 = Math.min(280, hp2 + heal2);
      console.log(`${name2} casts self-heal 💚 ${heal2} → HP: ${hp2}`);
    }
    if (mana2 < 100) {
      mana2 = Math.min(100, mana2 + 5);
      console.log(`💧 ${name2} regains 5 mana (${mana2}/100)`);
    }
  }

  turn++;
  console.log(`-----${turn}----- `);
}

// ===== Victory banner =====
const winner = hp1 > 0 ? name1 : name2;
console.log(`🏆 ${winner} stands victorious! 🏆`);