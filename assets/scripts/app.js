'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const enquire = require('../../lib/enquire')

$(() => {
  enquire.register('print', {
    // triggered when a media query matches.
    match: function () {
      $('#main-container').removeClass('container')
      // $('#main-container').addClass('container-fluid')
      $('#main-container').css({width: '100%'})
    },
    // triggered when the media query transitions
    // *from a matched state to an unmatched state*.
    unmatch: function () {
      // $('#main-container').removeClass('container-fluid')
      $('#main-container').addClass('container')
      $('#main-container').css({width: ''})
    }
  })
})
