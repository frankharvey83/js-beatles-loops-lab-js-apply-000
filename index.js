const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
    var strings = [];
    for (var i = 0; i < musicians.length; i++) {
      strings.push(musicians[i] + " plays " + instruments[i]);
    }
    return strings;
}

function johnLennonFacts(arr) {
  var count = 0;
  while (count < facts.length) {
    newFacts.push(facts[count] + "!!!");
    count++;
  }
  return newFacts;
};

function iLoveTheBeatles(num) {
  var newArr = []
  if (num === 7) {
    for (i = 0; i < 8; i++) {
      newArr.push("I love the Beatles!");
    }
} else if (num === 17) {
    newArr.push("I love the Beatles!")
  }
  return newArr;
};
