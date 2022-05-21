'use strict';

import ProjectCard from '../project-card';

describe('ProjectCard View', function() {

  beforeEach(() => {
    this.projectCard = new ProjectCard();
  });

  it('Should run a few assertions', () => {
    expect(this.projectCard);
  });

});
