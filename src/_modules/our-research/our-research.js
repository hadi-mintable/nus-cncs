"use strict";

import $ from "jquery";
export default class OurResearch {
  constructor() {
    const $researchAreas = $(".our-research__wrapper li");
    const $chosenEle = $(".our-research__chosen");
    const $chosenPara = $(".our-research__chosen > p");

    $researchAreas.on("click", e => {
      e.preventDefault();

      $chosenEle.removeClass("is-open");

      const bodyText = $(e.currentTarget).data("body");
      $chosenPara.text(bodyText);

      setTimeout(() => {
        $chosenEle.addClass("is-open");
      }, 500);
    });
  }
}
