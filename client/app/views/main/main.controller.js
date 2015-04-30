'use strict';

class MainCtrl {
  constructor(isActive) {
    this.isActive = isActive;

    console.log(this.isActive);
  }
}

MainCtrl.$inject = ['isActive'];

export default MainCtrl;
