'use strict';

import BroadCategories from '../broad-categories';

describe('BroadCategories View', function() {

  beforeEach(() => {
    this.broadCategories = new BroadCategories();
  });

  it('Should run a few assertions', () => {
    expect(this.broadCategories);
  });

});
