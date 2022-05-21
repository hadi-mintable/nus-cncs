'use strict';

import OurProjects from '../our-projects';

describe('OurProjects View', function() {

  beforeEach(() => {
    this.ourProjects = new OurProjects();
  });

  it('Should run a few assertions', () => {
    expect(this.ourProjects);
  });

});
