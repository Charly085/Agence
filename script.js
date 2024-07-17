document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const Pa = parseFloat(document.getElementById('income').value);
    const mandateType = document.getElementById('mandate-type').value;
    const transactionType = document.getElementById('transaction-type').value;

    let Ho;
    if (transactionType === 'simple') {
        Pn = (Pa - 3000)/1,04;
        if (Pn <= 200000) {
            Pn = (Pa - 3000)/1,045;
        }
    }
    else {
        Pn = (Pa - 3000)/1,05;
        if (Pn <= 200000) {
            Pn = (Pa - 3000)/1,055;
        }
    }
    Ho = Pa - Pn

    // Calcul de Ho'
    const HoPrime = 0.616 * Ho;

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


    // Affichage du résultat
    document.getElementById('result').innerText = `Net après impôt: €${result.toFixed(2)}`;
});
