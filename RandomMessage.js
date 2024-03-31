
invType = ['bonds', 'stocks and shares', 'private capital'];

estReturn = Math.floor(Math.random() * 100);

successLevel = ['reasonable', 'very good', 'high'];

const investmentSuccess = () => {
    selectedType = invType[Math.floor(Math.random() * 3)]
    if (estReturn > 0 && estReturn < 10) {
        selectedLevel = successLevel[0];
    } else if (estReturn > 10 && estReturn < 20) {
        selectedLevel = successLevel[1];
    } else {
        selectedLevel = successLevel[2];
    }
    return 'You invested in ' + selectedType + ' and achieved a ' + selectedLevel + ' return of ' + estReturn + '% per annum.'
}

console.log(investmentSuccess());