// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-JS/sw.js", {
    scope: "/ICS2O-Unit6-04-JS/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = "Radius: " + radius + " cm"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
