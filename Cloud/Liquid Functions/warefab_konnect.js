//  Title: Warefab V2 Uplink
//  Author: Liquid Telecom, Ngesa N.
//  Creation date: - (DEC 2019 by Liquid Labs)
//  Last edit date: 04.12.2019

function decodePayload(payload) {
  let lat_1, lng_1, latitude, longitute, temperature, humidity;

  lat_1 = parseInt(payload.slice(0, 6), 16);
  latitude = (-1 * lat_1) / 10000; // LAT = (LAT/100000)-90
  lng_1 = parseInt(payload.slice(7, 14), 16);
  longitute = lng_1 / 10000; // LON = (LON/100000)-180
  temperature = parseInt(payload.slice(18, 20), 16);
  humidity = parseInt(payload.slice(20, 22), 16);

  let payloaddecoded = {
    latitude: latitude,
    longitude: longitute,
    temperature: temperature,
    humidity: humidity,
  };

  console.log("Warefab Bitdecoder - Liquid functions running!");
  return payloaddecoded;
}

module.exports.decodePayload = decodePayload;
