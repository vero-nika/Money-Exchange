// PLEASE DON'T change function name
    module.exports = function makeExchange(currency) {
	
        var coins = [50,  25,   10,  5,   1 ];
        var coinsSeq = ['H', 'Q', 'D', 'N', 'P'];
        var cash = {};
        if (currency > 10000) {
            var error = { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
            return error;
        }
        else if (currency < 1) {
            return {};
        }
        else {
            for ( var counter = 0; counter < coins.length; counter++ ) {
                if (currency!=0) {
                    var i = currency / coins[counter];
                    currency =  currency - (Math.floor(i) * coins[counter]);
                    var cashSeq = Math.floor(i);
                    var j = counter;
                     if (cashSeq != 0) {
                        cash[coinsSeq[j]] = Math.floor(i); 
                     } 
                }
             }
            }
        return cash;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
};