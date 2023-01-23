
module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, loan.customerName);
    output = output.replace(/{%PHONE%}/g, loan.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%LOANAMOUNT%}/g, loan.loanAmount);
    output = output.replace(/{%INTEREST%}/g, loan.interest);
    output = output.replace(/{%LOANTERMYEARS%}/g, loan.loanTermYears);
    output = output.replace(/{%ID%}/g, loan.id);
    output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
    output = output.replace(/{%DESCRIPTION%}/g, loan.description);
    
    //Computed field
    let x = (1 + loan.interest / 100);
    loan.total = loan.loanAmount * (Math.pow(x, loan.loanTermYears));
    loan.total = loan.total.toFixed(2);
    output = output.replace(/{%TOTAL%}/g, loan.total);
   
    return output;
}