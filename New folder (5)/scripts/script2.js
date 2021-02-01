var ATM = {
    username:prompt("Enter your name"),
	correctpass : (/^[0-9]{4}$/),
	passTry : 3,
	currentBalance : 35000,
};
	
// Input a username
 ATM.atmMachineUsername = function() {
	if (ATM.username !== "" && ATM.username !== null) {
		ATM.atmMachinePassword();
	} else {
		ATM.atmMachineUsername();
	}
}
// Input a valid password
ATM.atmMachinePassword = function () {
	var pswEntry = parseInt(prompt("Dear " + ATM.username + ", enter your 4 digit PIN"));
	ATM.checkPassword(pswEntry);
}
// Verify Password meets requirements
ATM.checkPassword =function (userInput) {
    if (ATM.correctpass.test(userInput)){
        ATM.selectAccountType();
    } else {
        while (!(ATM.ATM.correctpass.test(userInput))) {
            if (ATM.passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support."); 
                exit();
                break;
            } else {
				ATM.passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + ATM.passTry + " chance/s to try");
            	ATM.atmMachinePassword();
			}
        }
    }
}
// Select Which account type to use
ATM.selectAccountType = function () {
    var accountType = parseInt(prompt("Which type of account do you have? \n 1. Savings \n 2. Current \n 3. Credit"));
	if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
		ATM.selectFunction();
	} else {
		alert("Please make a valid selection");
		ATM.selectAccountType();
	}
}
// Select what the user wishes to do
ATM.selectFunction = function() {
	var atmFunctions = parseInt(prompt("Hello " + ATM.username + ", what can we do for you today? \n 1. Balance \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
	if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
		switch (atmFunctions) {
			case 1:
				ATM.Balance();
				break;
			case 2:
				ATM.withdrawal();
				break;
			case 3:
				ATM.deposit();
				break;
			case 4:
				ATM.exit();
				break;
			default:
				alert("Please make a valid selection");
				ATM.selectFunction();
		}
	} else {
		alert("Please make a valid selection");
		ATM.selectFunction();
	}
}
// Current balance
ATM.Balance=function () {
	alert("Your current balance is $" + ATM.currentBalance);
	ATM.toContinue();
}
// Deposit
ATM.deposit=function () {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		ATM.currentBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + ATM.currentBalance);
		ATM.toContinue();
	} else {
		alert("Error: please enter a number!");
		ATM.deposit();
	}
}
// Withdrawal
ATM.withdrawal=function () {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= ATM.currentBalance) {
				ATM.currentBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + ATM.currentBalance);
				ATM.toContinue();
			} else {
				alert("You do not have sufficient funds!");
				ATM.withdrawal();
			}
		} else {
			alert("You must withdraw at least $1000");
			ATM.withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		ATM.withdrawal();
	}
}	
// Does the user wish to continue using the ATM
ATM.toContinue=function (){
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			ATM.exit();
    	}
		else {
			ATM.selectAccountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		ATM.toContinue();
	}
}
// Exit the ATM
ATM.exit=function () {
	alert("Thank you for patronising our ATM machine");
		// To simulate a real ATM, get ready for next user
		 ATM.atmMachineUsername();
}
ATM.atmMachineUsername();