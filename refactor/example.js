const plays = {
    hamlet: {
        name: 'Hamlet',
        type: 'tragedy',
    },
    'as-like': {
        name: 'As You Like It',
        type: 'comedy',
    },
    othello: {
        name: 'Othello',
        type: 'tragedy'
    }
};

const invoices = {
    customer: 'BigCo',
    performances: [
        {
            playID: 'hamlet',
            audience: 55,
        },
        {
            playID: 'as-like',
            audience: 35,
        },
        {
            playID: 'othello',
            audience: 40,
        },
    ]
};

statement(invoices, plays);

function statement(invoices, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statetment for ${invoices.customer}\n`;

    const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format;

    for (let perf of invoices.performances) {
        const play = plays[perf.playID];

        let thisAmount = 0;

        switch (play.type) {
            case 'tragedy':
                thisAmount = 40000;

                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;

            case 'comedy':
                thisAmount += 30000;

                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }

                thisAmount += 300 * perf.audience;
                break;

            default:
                throw new Error(`Unknown type: ${play.type}`);
        }

        //Добавление бонусов
        volumeCredits += Math.max(perf.audience - 30, 0);

        //Дополнительный бонус за каждые 10 комедий

        if ('comedy' === play.type) {
            volumeCredits += Math.floor(perf.audience / 5);
        }

        //Вывод строки счета
        result += `   ${play.name}: ${format(thisAmount / 100)}`;
        result += ` (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;

    console.log(result);
    return result;
}
