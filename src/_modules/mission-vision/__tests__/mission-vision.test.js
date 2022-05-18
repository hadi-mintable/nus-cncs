'use strict';

import MissionVision from '../mission-vision';

describe('MissionVision View', function() {

  beforeEach(() => {
    this.missionVision = new MissionVision();
  });

  it('Should run a few assertions', () => {
    expect(this.missionVision);
  });

});
