'use strict';

class MainCtrl {
  constructor(isActive) {
    this.isActive = isActive;
  }
}

MainCtrl.$inject = ['isActive'];

export default MainCtrl;
