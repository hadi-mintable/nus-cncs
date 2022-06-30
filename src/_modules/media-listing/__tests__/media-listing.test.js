'use strict';

import MediaListing from '../media-listing';

describe('MediaListing View', function() {

  beforeEach(() => {
    this.mediaListing = new MediaListing();
  });

  it('Should run a few assertions', () => {
    expect(this.mediaListing);
  });

});
