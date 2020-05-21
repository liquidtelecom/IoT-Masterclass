//  Title: Adeunis Atex Pulse 3 x46
//  Author: Liquid Telecom, Ngesa N.
//  Creation date: - (MAY 2020 by Liquid Labs)
//  Last edit date: 14.05.2020
//  Example Payload 0x46 0xA3 0x00015C4F 0x0000F74A, 46800000009F00000002, 46800000400c00004f70

const payload = "46800000400c00004f70";

function decodePayload(payload) {
  let frameCode, frameStatus, channelA, ChannelB, payloaddecoded;

  frameCode = payload.slice(0, 2);
  //swith to accomodate to metadata
  if (frameCode == 46) {
    frameStatus = payload.slice(2, 4);
    channelA = parseInt(payload.slice(4, 12), 16);
    ChannelB = parseInt(payload.slice(12, 20), 16);

    payloaddecoded = {
      frameCode: frameCode,
      frameStatus: frameStatus,
      channelA: channelA,
      ChannelB: ChannelB,
    };
    console.log(payloaddecoded);
  } else {
    console.log("metadata");
  }

  //k factor

  console.log("x46 Atex III Bitdecoder - Liquid functions running!");
  return payloaddecoded;
}

decodePayload(payload);
//module.exports.decodePayload = decodePayload;
