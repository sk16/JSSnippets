
var _  = require('lodash');

/* eslint-disable no-unused-vars */
const newDevelopment = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': true },
      { 'billiard room': false },
      { library: true },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false },
    ],
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': true },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function getEmptyRooms(list) {
  let empty = {};
  let nonEmpty = {};
  for (let val of list) {
    for (let room of val.rooms) {
      // eslint-disable-next-line no-restricted-syntax
      for (let roomName in room) {
        if(room[roomName] === false && !hasKey(nonEmpty, roomName)) {
          empty[roomName] = true;
        } else {
          nonEmpty[roomName] = false;
          delete empty[roomName];
        }
      }
    }
  }
  return Object.keys(empty);
};

//console.log(getEmptyRooms(newDevelopment));

const emptyRooms = Array.prototype.concat.apply([], newDevelopment
                  .map(elem => elem.rooms))
                  .reduce((roomInfo, elem) => {
                      let roomName = Object.keys(elem)[0];
                      roomInfo['empty'] = roomInfo['empty'] || {};
                      roomInfo['nonEmpty'] = roomInfo['nonEmpty'] || {};
                      if(!elem[roomName] && !hasKey(roomInfo['nonEmpty'], roomName)) {
                        roomInfo['empty'][roomName] = true;
                      } else if (elem[roomName]) {
                        roomInfo['nonEmpty'][roomName] = true;
                        delete roomInfo['empty'][roomName];
                      }
                    return roomInfo;
                  }, {});
console.log(emptyRooms);
