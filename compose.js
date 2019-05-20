class Flock {
    constructor(n) {
      this.seagulls = n;
    }
  
    conjoin(other) {
      this.seagulls += other.seagulls;
      return this;
    }
  
    breed(other) {
      this.seagulls = this.seagulls * other.seagulls;
      return this;
    }
  }
  
  const flockA = new Flock(4);
  const flockB = new Flock(2);
  const result = flockA
  const flockC = new Flock(0);
    .conjoin(flockC)
    .breed(flockB)
    .conjoin(flockA.breed(flockB))
    .seagulls;
  // 32
console.log(result);