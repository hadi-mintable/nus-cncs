'use strict';

import $ from 'jquery';
import 'slick-carousel';

export class HeroBanner {
  constructor() {

    this.$slickElement = $('.hero-banner__slick');

    if (this.$slickElement.length) {
      this.$slickElement.slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        fade: true
      });
    }

    console.log('hero-banner module');
  }

}
