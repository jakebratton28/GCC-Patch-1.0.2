
function answer02(risk, bonus, trader) 
{
    var total = 0;
    for (var j = 0; j < trader.length; j++) 
    {
        var riskNumbers = [];
        for (var i = 0; i < risk.length; i++) 
        {
            if (trader[j] >= risk[i]) 
            {
                riskNumbers.push(i);
            }
        }
        var highest = 0;
        for (var i = 0; i < riskNumbers.length; i++) 
        {
            if (bonus[riskNumbers[i]] > highest) 
            {
                highest = bonus[riskNumbers[i]];
            }
        }    
        print(highest);
        total = total + highest;
    }
    return total;
}

module.exports = answer02([2, 10, 9, 10, 10], [9, 1, 1, 6, 1], [9, 9, 8, 10, 10]);
