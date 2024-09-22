const btc = document.querySelector("#btc");
const doge = document.querySelector("#doge");
const eth = document.querySelector("#eth");

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-43FLwNEmvFxxQmh9NZXvKSQX'}
};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=inr', options)
  .then(response => response.json())
  .then(response => {
      btc.innerHTML = `₹${response.bitcoin.inr}`;
      doge.innerHTML = `₹${response.dogecoin.inr}`;
      eth.innerHTML = `₹${response.ethereum.inr}`;
  })
  .catch(err => console.error(err));
