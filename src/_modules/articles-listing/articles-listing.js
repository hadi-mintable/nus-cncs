"use strict";

import $ from "jquery";
export default class ArticlesListing {
  constructor() {
    const $mobileTrigger = $("#mobileTrigger");
    const $sidebar = $(".articles-listing__sidebar");

    $mobileTrigger.on("click", e => {
      e.preventDefault();

      $sidebar.toggleClass("is-open");
    });
  }
}
