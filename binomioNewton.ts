import { factorial } from "./factorial";

export function bNewton(n: number, k: number) {
    if (k <= n) {
        // valores
        const dividendo = factorial(n); // n!
        const divisor1 = factorial(k);  // k!
        const divisor2 = factorial(n - k); // (n - k)!

        // Operaciones
        const divided = dividendo / divisor2; // (n! / (n - k)!) / k!
        return Math.round(divided / divisor1);
        

        // var dividendo1 = factorial(m);
        // var divisor1 = factorial(m - n);
        // var divisor = factorial(n);
        // var dividendo = dividendo1 / divisor1; n! / (n - k)!
        // var combinacion = Math.round(dividendo / divisor);
        // return combinacion;

    } else return 0;
}