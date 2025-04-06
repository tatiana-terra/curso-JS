//recurssividade
/*
5! = 5x 4x 3x 2x 1
5! = 5X 4!

n! = n x (n-1)!
1! = 1

*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(3))