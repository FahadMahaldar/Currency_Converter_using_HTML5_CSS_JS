const currencyRates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.72,
  INR: 74.5,
  CAD: 1.24,
  AUD: 1.35,
  JPY: 109.88,
  CHF: 0.91,
  CNY: 6.48,
  NZD: 1.44,
    // Add more currencies and their rates as needed
  };
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  
  for (let currency in currencyRates) {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
    fromCurrencySelect.appendChild(option1);
  
    const option2 = document.createElement('option');
    option2.value = currency;
    option2.textContent = currency;
    toCurrencySelect.appendChild(option2);
  }
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertCurrency);
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
  
    if (!isNaN(amount)) {
      if (fromCurrency === toCurrency) {
        displayResult('Please select different currencies.');
        return;
      }
  
      if (fromCurrency in currencyRates && toCurrency in currencyRates) {
        const conversionRate = currencyRates[toCurrency] / currencyRates[fromCurrency];
        const convertedAmount = amount * conversionRate;
        displayResult(`${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
      } else {
        displayResult('Currency conversion is not available for the selected currencies.');
      }
    } else {
      displayResult('Please enter a valid amount.');
    }
  }
  
  function displayResult(message) {
    const convertedAmountElement = document.getElementById('convertedAmount');
    convertedAmountElement.textContent = message;
    document.querySelector('.result').style.display = 'block';
  }
  