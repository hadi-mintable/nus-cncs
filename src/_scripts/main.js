// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { HeroBanner } from '../_modules/hero-banner/hero-banner';

$(() => {
  if ($('.hero-banner').length) {
    new HeroBanner();
  }
});
