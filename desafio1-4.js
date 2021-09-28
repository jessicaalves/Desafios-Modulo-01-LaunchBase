const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

/*Parte 1: Adicionar transações*/
function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type == "credit") {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }
}

/*Parte 2: Gerar relatórios*/
function getHigherTransactionByType(type) {
    let higherValue = 0;
    let higherTransaction;

    for (let transaction of user.transactions) {
        if (transaction.value > higherValue && transaction.type == type) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }
    return higherTransaction;
}

function getAverageTransactionValue() {
    let average = 0;

    for (let transaction of user.transactions) {
        average = ((average + transaction.value) / user.transactions.length);
    }
    return average;
}

function getTransactionsCount() {
    let numberTransactions = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            numberTransactions.credit++;
        } else {
            numberTransactions.debit++;
        }
        return numberTransactions;
    }
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }