myapp.filter('INR', function () {
    return function (input) {
        if (!isNaN(input)) {
            var currencySymbol = '₹ ';
            input = parseFloat(Math.round(input + 'e' + 2) + 'e-' + 2).toFixed(2);
            var result = input.toString().split('.');

            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != ''&& otherNumbers!= '-')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1];
            }

            return currencySymbol + output;
        }
    }
});
