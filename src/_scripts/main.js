// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";

import "core-js";
import "regenerator-runtime/runtime";
import $ from "jquery";
import { HeroBanner } from "../_modules/hero-banner/hero-banner";
import ArticlesListing from "../_modules/articles-listing/articles-listing";
import OurResearch from "../_modules/our-research/our-research";

$(() => {
  if ($(".hero-banner").length) {
    new HeroBanner();
  }

  if ($(".articles-listing").length) {
    new ArticlesListing();
  }

  if ($(".our-research").length) {
    new OurResearch();
  }
});
