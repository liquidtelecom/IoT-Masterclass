var payload,
temperature,
parsedData = [],
obj = {};


var payloadLength = payload.length;


if (payloadLength <= 6) {
  
  var newStatPayload = parseInt(payload.slice(0, 2), 16).toString(2).padStart(8, '0');

  var bat = parseInt(newStatPayload.slice(0,2), 2).toString(16).padStart(2, '0');

  switch (bat) {
    case '03':
        obj = {};
        obj.key = 'Battery';
        obj.value = 100;
        obj.type = 'number';
        obj.unit = '%';
        parsedData.push(obj);
      break; 
    case '02':
        obj = {};
        obj.key = 'Battery';
        obj.value = 75;
        obj.type = 'number';
        obj.unit = '%';
        parsedData.push(obj);
      break;
      
    case '01':
        obj = {};
        obj.key = 'Battery';
        obj.value = 50;
        obj.type = 'number';
        obj.unit = '%';
        parsedData.push(obj);
      break;

    case '00':
        obj = {};
        obj.key = 'Battery';
        obj.value = 0;
        obj.type = 'number';
        obj.unit = '%';
        parsedData.push(obj);
      break;

    default: 

      
  }

  var stat = parseInt(newStatPayload.slice(2,5), 2).toString(16).padStart(2, '0');
  
}else {
  
    var ssidx = payload.slice(0, 11);
    var ssidy = payload.slice(11);


   
        obj = {};
        obj.key = 'SSID1';
        obj.value = ssidx;
        obj.type = 'string';
        obj.unit = '';
        parsedData.push(obj);


        obj = {};
        obj.key = 'SSID2';
        obj.value = ssidy;
        obj.type = 'string';
        obj.unit = '';
        parsedData.push(obj);
}



//console.log(parsedData);
return parsedData;
