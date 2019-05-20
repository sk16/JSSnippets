const coinList = {
 20: 5, 500: 3, 10: 30, 100: 9
};
const getTotalAmount = (coins) => Object.entries(coins).reduce((sum, [value, count]) => {
  sum += value * count;
  return sum;
}, 0);

console.log('Total = ', getTotalAmount(coinList));

const coinBag = [
    { 20: 5 },
    { 50: 10 },
    { 100: 30 },
    { 20: 10 },
    { 500: 30 },
    { 50: 2 },
    { 20: 100 },
    { 500: 50 },
];

const getCoinListFromBag = (bag) => bag.reduce((list, bagItem) => {
    let [denomination, count] = Array.prototype.concat.apply([],Object.entries(bagItem));
    list[denomination] = Object.prototype.hasOwnProperty.call(list, denomination) 
                        ? list[denomination] += parseInt(count)
                        : parseInt(count);
    return list;
}, {});

const list = getCoinListFromBag(coinBag);
console.log('Coin list: ', list);
console.log('Total = ', getTotalAmount(list));
