import { pascalTriangleLevel } from "./combination";
import { createWriteStream } from "fs";

// string = texto
const triangleLevels: string[] = [];

for (let i = 0; i < 100; i++) {
    console.log(i);
    triangleLevels.push(pascalTriangleLevel(i).equation);
}
// const reversedTriangleLevels = [...triangleLevels].reverse();
// let text = '';
// for (const level of triangleLevels) {
//     const index = triangleLevels.indexOf(level);

//     const mirrorLevel = reversedTriangleLevels[index];
//     console.log(Math.floor(mirrorLevel.length / 2));
//     text += `${' '.repeat(Math.floor(mirrorLevel.length / 2))}${level}\n`;
// }
// console.log(text);

const maxLineLength = triangleLevels[triangleLevels.length - 1].length;
const text = triangleLevels.map((level) => {
    const spaces = ' '.repeat(Math.floor((maxLineLength - level.length) / 2));

    return `${spaces}${level}\n`;
}).join('');
console.log('Creando archivo')
const file = createWriteStream('./test.txt');

file.write(text);
