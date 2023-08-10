import { bNewton } from "./binomioNewton";

export function pascalTriangleLevel(numTotal: number) {
    let text = ``;

    let value = 0;
    for (let x = numTotal, y = 0; y <= numTotal; x--, y++) {
        value = bNewton(numTotal, y);
        switch (y) {
            case 0:
                text += `1 `;
                break;
            case 1:
                x = x === 1 ? 0 : x;
                text += `+ ${value} `;
                break;
            case numTotal - 1:
                text += `+ ${value} `;
                break;
            case numTotal:
                text += `+ 1`;
                break;
            default:
                text +=
                    `+ ${value} `;
                break;
        }
    }
    return {
        base: `(a+b)^${numTotal} =`,
        equation: text,
    };

}
