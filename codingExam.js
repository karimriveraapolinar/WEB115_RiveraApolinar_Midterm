const buttonone=document.getElementById('Button1');

buttonone.addEventListener('click',function(){
    const loanAmountPrior = parseInt(window.prompt("Enter the loan amount (without commas):"));
    const downPaymentPercent = parseInt(window.prompt("Enter the downpayment amount (as a percentage of the total loan amount):"));
    let termYears = parseInt(window.prompt("Enter the loan term in years (either 30 or 15):"));
    const downPaymentValue = loanAmountPrior * (downPaymentPercent / 100);
    const loanAmount = loanAmountPrior - downPaymentValue;

    while (termYears !== 30 && termYears !== 15) {
        alert("Invalid loan term. Please enter either 30 or 15 years.");
        termYears = parseInt(window.prompt("Enter the loan term in years (either 30 or 15):"));
    }

    const interestRate = 0.0575;
    const monthlyPayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2);
    const totalInterest = (monthlyPayment * (termYears * 12)) - loanAmount;
    const totalLoanCost = loanAmount + totalInterest;
    const results = document.getElementById('results');
    results.innerHTML = ''
    const values = document.createElement('p');
        values.textContent = `Mortgage Term (Years): ${termYears} \n  Mortgage Interest Rate: ${(interestRate * 100).toFixed(2)}%\n Mortgage Amount (Loan Principal): $${loanAmount.toFixed(2)}\n 
        Total Interest Amount: $${totalInterest.toFixed(2)}\n Total Mortgage Amount: $${totalLoanCost.toFixed(2)}\n Monthly Mortgage Payment: $${monthlyPayment}`
        results.appendChild(values);
    let mortgageLoanBalance = totalLoanCost;
    let month = 1;

    while (mortgageLoanBalance > 0) {
        mortgageLoanBalance -= monthlyPayment;
        mortgageLoanBalance = mortgageLoanBalance < 0 ? 0 : mortgageLoanBalance; 
        console.log(`Month ${month}: Remaining Loan Balance: $${mortgageLoanBalance.toFixed(2)}`);
        month++;
    }

    console.log("This is the Ending Amortization Calculator...");
});