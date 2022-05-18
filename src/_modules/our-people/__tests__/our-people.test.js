'use strict';

import OurPeople from '../our-people';

describe('OurPeople View', function() {

  beforeEach(() => {
    this.ourPeople = new OurPeople();
  });

  it('Should run a few assertions', () => {
    expect(this.ourPeople);
  });

});
