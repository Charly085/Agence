document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const Pa = parseFloat(document.getElementById('income').value);
    const mandateType = document.getElementById('mandate-type').value;
    const transactionType = document.getElementById('transaction-type').value;

    // Calcul de H0 en fonction de Pa
    let Ho;
    if (Pa >= 200000) {
        Ho = (Pa + 75000) / 26;
    } else {
        Ho = (9 * Pa + 624000) / 209;
    }

    // Calcul de H0'
    const HoPrime = 0.624 * Ho;

    // Coefficient basé sur le type de mandat et le type de transaction
    let coefficient;
    if (mandateType === 'simple') {
        if (transactionType === 'entry_only') {
            coefficient = 0.11;
        } else if (transactionType === 'entry_exit') {
            coefficient = 0.21;
        } else if (transactionType === 'exit_only') {
            coefficient = 0.1;
        }
    } else if (mandateType === 'exclusive') {
        if (transactionType === 'entry_only') {
            coefficient = 0.13;
        } else if (transactionType === 'entry_exit') {
            coefficient = 0.23;
        } else if (transactionType === 'exit_only') {
            coefficient = 0.1;
        }
    }

    // Calcul du résultat
    const result = HoPrime * coefficient;

    // Affichage du résultat
    document.getElementById('result').innerText = `Net après impôt: €${result.toFixed(2)}`;
});
