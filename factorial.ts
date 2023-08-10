
export function factorial(p: number) {
    let f = 1;
    for (let i = 1; i <= p; i++) {
        f *= i;
    }
    return f;
}