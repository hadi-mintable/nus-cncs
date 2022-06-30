'use strict';

import ResourcesListing from '../resources-listing';

describe('ResourcesListing View', function() {

  beforeEach(() => {
    this.resourcesListing = new ResourcesListing();
  });

  it('Should run a few assertions', () => {
    expect(this.resourcesListing);
  });

});
