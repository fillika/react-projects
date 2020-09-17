function createStatementData(invoices, plays) {
  /**
   * Объект как промежуточная структура
   */
  const statementData = {};
  statementData.customer = invoices.customer;
  statementData.performances = invoices.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;

  /**
   * Функция делает копию объекта спектакля
   * @param aPerformance
   * @returns {*}
   */
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditFor(result);

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
   * Функция рассчитывает плату за одно исполнение
   * @param aPerformance {object} - объект с выступлением. a - означает any
   * @return {number}
   */
  function amountFor(aPerformance) {
    let result = 0;

    switch (aPerformance.play.type) {
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
      throw new Error(`Unknown type: ${aPerformance.play.type}`);
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
    if ('comedy' === aPerformance.play.type) {
      result += Math.floor(aPerformance.audience / 5);
    }

    return result;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  /**
   * Добавление бонусов
   * @return {number}
   */
  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}

export default createStatementData;
