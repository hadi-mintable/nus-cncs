'use strict';

import Giving from '../giving';

describe('Giving View', function() {

  beforeEach(() => {
    this.giving = new Giving();
  });

  it('Should run a few assertions', () => {
    expect(this.giving);
  });

});
