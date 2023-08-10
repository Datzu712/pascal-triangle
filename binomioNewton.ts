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
    } else return 0;
}