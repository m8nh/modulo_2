const calculateValue = (input: number): number => {
    if (input < 1) return 0;
    if (input < 2) return 1;
};

// example:

for (let n = 0; n < 10; n++) {
    const value = calculateValue(n)
    console.log('f(' + n + ')=' + value);
}