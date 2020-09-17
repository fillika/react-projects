import createStatementData from './createStatementData';

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
    type: 'tragedy',
  },
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
  ],
};

statement(invoices, plays);

function statement(invoices, plays) {
  return renderPlainText(createStatementData(invoices, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    //Вывод строки счета
    result += `   ${perf.play.name}: ${toUSD(perf.amount)}`;
    result += ` (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${toUSD(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  console.log(result);

  /**
   * Создание формата для числа
   * @param aNumber
   * @return {string}
   */
  function toUSD(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

