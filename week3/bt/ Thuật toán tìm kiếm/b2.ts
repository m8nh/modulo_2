let arr: string[] = ['099999', '0888888', '077777', '09888888']
let viettel: string[] = []
let vina: string[] = []
let mobi: string[] = []
for (const argument of arr) {
    if (argument.substring(0, 3) === '099') {
        viettel.push(argument)
    }
    else if (argument.substring(0, 3) === '088') {
        vina.push(argument)
    }
    else if (argument.substring(0, 3) === '077') {
        mobi.push(argument)
    }
    else {
        console.log(`${argument} khong thuoc nha mang nao `)
    }
}



console.log(`${mobi} thuoc mang mobi `)
console.log(`${viettel} thuoc mang viettel `)
console.log(`${vina} thuoc mang vina `)