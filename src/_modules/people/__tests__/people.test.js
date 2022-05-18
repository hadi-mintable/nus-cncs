'use strict';

import People from '../people';

describe('People View', function() {

  beforeEach(() => {
    this.people = new People();
  });

  it('Should run a few assertions', () => {
    expect(this.people);
  });

});
