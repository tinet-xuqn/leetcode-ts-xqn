class ParkingSystem {

  bigMax: number = 0;
  mediumMax: number = 0;
  smallMax: number = 0;

  constructor(big: number, medium: number, small: number) {
    this.bigMax = big;
    this.mediumMax = medium;
    this.smallMax = small;
  }

  addCar(carType: number): boolean {
    switch (carType) {
      case 1:
        if (this.bigMax > 0) {
          this.bigMax--;
          return true;
        }
        break;
      case 2:
        if (this.mediumMax > 0) {
          this.mediumMax--;
          return true;
        }
        break;
      case 3:
        if (this.smallMax > 0) {
          this.smallMax--;
          return true;
        }
        break;
      default:
        break;
    }
    return false;
  }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/