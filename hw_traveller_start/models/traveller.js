const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((distanceTotal, journey) => {
    return distanceTotal + journey.distance;
  }, 0);
  return total;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const transportList = this.journeys.map((journey) => {
//     return journey.transport;
//     });
  
//     create new empty list 
//     Iterate through new transportList
//     if each transport is != anything on new list
//     push to new list


//   return result;
//   })
// };

module.exports = Traveller;



