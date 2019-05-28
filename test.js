function flat(r, a) {
  var b = {};
  Object.keys(a).forEach(function (k) {
      if (k !== 'items') {
          b[k] = a[k];
      }
  });
  r.push(b);
  if (Array.isArray(a.items)) {
      b.items = a.items.map(function (a) { return a.id; });
      return a.items.reduce(flat, r);
  }
  return r;
}

var data = [{ "id": 1, "level": "1", "text": "Sammy", "type": "Item", "items": [{ "id": 11, "level": "2", "text": "Table", "type": "Item", "items": [{ "id": 111, "level": "3", "text": "Dog", "type": "Item", "items": null }, { "id": 112, "level": "3", "text": "Cat", "type": "Item", "items": null }] }, { "id": 12, "level": "2", "text": "Chair", "type": "Item", "items": [{ "id": 121, "level": "3", "text": "Dog", "type": "Item", "items": null }, { "id": 122, "level": "3", "text": "Cat", "type": "Item", "items": null }] }] }, { "id": 2, "level": "1", "text": "Sundy", "type": "Item", "items": [{ "id": 21, "level": "2", "text": "MTable", "type": "Item", "items": [{ "id": 211, "level": "3", "text": "MTDog", "type": "Item", "items": null }, { "id": 212, "level": "3", "text": "MTCat", "type": "Item", "items": null }] }, { "id": 22, "level": "2", "text": "MChair", "type": "Item", "items": [{ "id": 221, "level": "3", "text": "MCDog", "type": "Item", "items": null }, { "id": 222, "level": "3", "text": "MCCat", "type": "Item", "items": null }] }] }, { "id": 3, "level": "1", "text": "Bruce", "type": "Folder", "items": [{ "id": 31, "level": "2", "text": "BTable", "type": "Item", "items": [{ "id": 311, "level": "3", "text": "BTDog", "type": "Item", "items": null }, { "id": 312, "level": "3", "text": "BTCat", "type": "Item", "items": null }] }, { "id": 32, "level": "2", "text": "Chair", "type": "Item", "items": [{ "id": 321, "level": "3", "text": "BCDog", "type": "Item", "items": null }, { "id": 322, "level": "3", "text": "BCCat", "type": "Item", "items": null }] }] }];

console.log(data.reduce(flat, []));