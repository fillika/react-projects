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
    let result = `Statement for ${invoices.customer}\n`;

    for (let perf of invoices.performances) {
        //Вывод строки счета
        result += `   ${playFor(perf).name}: ${toUSD(amountFor(perf))}`;
        result += ` (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${toUSD(totalAmount())}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;

    console.log(result);

    function totalAmount() {
        let result = 0;

        for (let perf of invoices.performances) {
            result += amountFor(perf);
        }

        return result;
    }

    /**
     * Функция рассчитывает плату за одно исполнение
     * @param aPerformance {object} - объект с выступлением. a - означает any
     * @return {number}
     */
    function amountFor(aPerformance) {
        let result = 0;

        switch (playFor(aPerformance).type) {
            case 'tragedy':
                result = 40000;

                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;

            case 'comedy':
                result += 30000;

                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }

                result += 300 * aPerformance.audience;
                break;

            default:
                throw new Error(`Unknown type: ${playFor(aPerformance).type}`);
        }

        return result;
    }

    /**
     * Подсчет бонусов
     * @param aPerformance
     * @return {number}
     */
    function volumeCreditFor(aPerformance) {
        let result = 0;

        result += Math.max(aPerformance.audience - 30, 0);

        //Дополнительный бонус за каждые 10 комедий
        if ('comedy' === playFor(aPerformance).type) {
            result += Math.floor(aPerformance.audience / 5);
        }

        return result;
    }

    /**
     * Добавление бонусов
     * @return {number}
     */
    function totalVolumeCredits() {
        let result = 0;

        for (let perf of invoices.performances) {
            result = volumeCreditFor(perf);
        }

        return result;
    }

    /**
     * Функция для формирования локальной переменной
     * @param aPerformance
     * @return {*}
     */
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    /**
     * Создание формата для числа
     * @param aNumber
     * @return {string}
     */
    function toUSD(aNumber) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(aNumber  / 100);
    }
}




