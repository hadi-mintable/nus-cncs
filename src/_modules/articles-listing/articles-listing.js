"use strict";

import $ from "jquery";
export default class ArticlesListing {
  constructor() {
    let params = new URLSearchParams(location.search);
    const $mobileTrigger = $("#mobileTrigger");
    const $sidebar = $(".articles-listing__sidebar");
    const $label = $(".articles-listing__list label");

    $mobileTrigger.on("click", e => {
      e.preventDefault();
      $sidebar.toggleClass("is-open");
    });

    $label.on("click", function(e) {
      const $radio = $(this).find("input");
      const param = $radio.attr("name");
      const value = $radio.data("value");

      if (params.has(param)) {
        params.set(param, value);
      } else {
        params.append(param, value);
      }

      window.location.search = params.toString();
    });

    const $searchTrigger = $("#submitSearch");
    const $searchInput = $(".articles-listing__search input");

    $searchTrigger.on("click", function(e) {
      const value = $searchInput.val();

      if (value === "") {
        return;
      }
      if (params.has("s")) {
        params.set("s", value);
      } else {
        params.append("s", value);
      }

      window.location.search = params.toString();
    });
  }
}
