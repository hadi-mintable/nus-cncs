'use strict';

import ArticlesListing from '../articles-listing';

describe('ArticlesListing View', function() {

  beforeEach(() => {
    this.articlesListing = new ArticlesListing();
  });

  it('Should run a few assertions', () => {
    expect(this.articlesListing);
  });

});
