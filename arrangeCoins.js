var arrangeCoins = function(n) {
    let row = 0;

    for (let i = 1; i <= n; i++) {
        if (n >= i) {
            n = n - i;
            row++;
        } else {
            break;
        }
    }

    return row;
};