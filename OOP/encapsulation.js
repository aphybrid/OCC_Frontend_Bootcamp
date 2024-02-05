console.log("OOP")

//Encapsulatioan
//Class

class BankAccount {
        constructor (accountNumber, balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }

deposit(amount) {
    this.balance += amount;
}

withdraw(amount) {

    if (amount > this.balance) {
        this.balance -= amount;

    } else {
        console.log("Insufficinet Funds")
    }
}
 
getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance:${this.balance}`;
        
        }

     

}

const myAccount = new BankAccount("123456789", 1000);
const myRegel = new BankAccount("3456789", 20000);

myAccount.deposit(3000);

myAccount.withdraw(2000);

console.log(myAccount.getAccount());
console.log(myRegel.getAccount());
