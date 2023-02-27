const request = require('request');

const id = '0370d3c5-dea9-4151-a935-d31657ccae9a'

const options = {
  method: 'POST',
  url: `https://sandbox.sibspayments.com/sibs/spg/v1/payments/${id}/mbway-id/purchase`,
  headers: {'content-type': 'application/json', accept: 'application/json'},
  body: {
    customerPhone: '351#912345678',
    info: {
      deviceInfo: {
        browserAcceptHeader: '5610631664992776',
        browserJavaEnabled: 'hozul',
        browserLanguage: 'IR',
        browserColorDepth: '#f7ea4e',
        browserScreenHeight: 'tidwu',
        browserScreenWidth: '5932709452972032',
        browserTZ: 'sojrup',
        browserUserAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        systemFamily: 'vigitsu',
        systemVersion: 'mituboa',
        systemArchitecture: 'goudoroborzuifab',
        deviceManufacturer: 'dejoztufichunotc',
        deviceModel: 'nucwocugg',
        deviceID: '7523674387120128',
        applicationName: 'Nancy Watson',
        applicationVersion: 'lorgimoca',
        geoLocalization: 'igju',
        ipAddress: '127.8.190.122'
      },
      customerInfo: [
        {key: 'vudlimtik', value: '50.27'},
        {key: 'gahkufa', value: '7.52'},
        {key: 'negnezp', value: '56.48'}
      ]
    },
    actionProcessed: {id: '6248477812064256', type: 'THREEDS_METHOD', executed: false}
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});