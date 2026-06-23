const findBracketCombinations = (num) => {
    getPossibleCombinations = (open, close) => {
        let comb = 0;
        if (open === 0 && close === 0) return 1;
        if (open > 0) {
            comb += getPossibleCombinations(open - 1, close)
        }
        if (close > open) {
            comb += getPossibleCombinations(open, close - 1)
        }
        return comb;
    }
    return getPossibleCombinations(num, num)
}
console.log(findBracketCombinations(3));