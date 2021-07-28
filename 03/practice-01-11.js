// Practice. CLasses. Counter
const decBtn = document.getElementById("decrement");
const incBtn = document.getElementById("increment");
const count = document.getElementById("count");

class Counter {
  constructor(startCount, countStep, place) {
    this.startCount = startCount;
    this.countStep = countStep;
    this.minCount = startCount;
    // textContent - для отрисовки текста ВНУТРИ тега
    place.textContent = this.startCount;
  }

  toIncrement(place) {
    this.startCount += this.countStep;
    this.toSetStartCount(place);
  }

  toDecrement(place) {
    if (this.startCount <= this.minCount) return;
    this.startCount -= this.countStep;
    this.toSetStartCount(place);
  }

  toSetStartCount(place) {
    place.textContent = this.startCount;
  }
}

const myCounter = new Counter(5, 1, count);
console.log(myCounter);

// addEventListener - метод глобальный
// 1 addEventListener - одно событие

incBtn.addEventListener("click", () => {
  myCounter.toIncrement(count);
});

decBtn.addEventListener("click", () => {
  myCounter.toDecrement(count);
});
