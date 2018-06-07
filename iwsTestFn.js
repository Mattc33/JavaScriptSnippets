const x = [
    {
      "carrier_id": 39,
      "carrier_name": "Default",
      "carrier_tier": 1,
      "white_list": [
        35,
        38,
        34,
        55,
        37
      ],
      "black_list": [
        36
      ],
      "ratecard_id": 35176,
      "ratecard_name": "default test 1#201806011708#private#Afghanistan",
      "rating": 0,
      "quality_of_service": 1,
      "resellable": true,
      "carrier_coverage": true,
      "end_ts": "2018-06-01T21:08:58Z",
      "quantity_available": 0,
      "popular_deals": false,
      "rates": [
        {
          "prefix": "93",
          "destination": "Afghanistan Fixed",
          "buy_rate": 0.1708,
          "sell_rate": 0.174216
        },
        {
          "prefix": "9370",
          "destination": "Afghanistan Mobile - AWCC",
          "buy_rate": 0.0618,
          "sell_rate": 0.063036
        },
        {
          "prefix": "9375",
          "destination": "Afghanistan Mobile - AT",
          "buy_rate": 0.1671,
          "sell_rate": 0.170442
        }
      ]
    },
    {
      "carrier_id": 39,
      "carrier_name": "Default",
      "carrier_tier": 1,
      "white_list": [
        35,
        38,
        36,
        34,
        37
      ],
      "black_list": [
        55
      ],
      "ratecard_id": 35177,
      "ratecard_name": "Default test 2#201806011720#private#Afghanistan",
      "rating": 0,
      "quality_of_service": 1,
      "resellable": true,
      "carrier_coverage": true,
      "end_ts": "2018-06-01T21:20:50Z",
      "quantity_available": 0,
      "popular_deals": false,
      "rates": [
        {
          "prefix": "93",
          "destination": "Afghanistan Fixed",
          "buy_rate": 0.1708,
          "sell_rate": 0.174216
        },
        {
          "prefix": "9370",
          "destination": "Afghanistan Mobile - AWCC",
          "buy_rate": 0.0618,
          "sell_rate": 0.063036
        },
        {
          "prefix": "9375",
          "destination": "Afghanistan Mobile - AT",
          "buy_rate": 0.1671,
          "sell_rate": 0.170442
        }
      ]
    },
    {
      "carrier_id": 39,
      "carrier_name": "Default",
      "carrier_tier": 1,
      "white_list": [
        35,
        38,
        36,
        34,
        55
      ],
      "black_list": [
        37
      ],
      "ratecard_id": 35178,
      "ratecard_name": "Default test 2#201806011720#teleU#Afghanistan",
      "rating": 0,
      "quality_of_service": 1,
      "resellable": true,
      "carrier_coverage": true,
      "end_ts": "2018-06-01T21:20:50Z",
      "quantity_available": 0,
      "popular_deals": false,
      "rates": [
        {
          "prefix": "93",
          "destination": "Afghanistan Fixed",
          "buy_rate": 0.1708,
          "sell_rate": 0
        },
        {
          "prefix": "9370",
          "destination": "Afghanistan Mobile - AWCC",
          "buy_rate": 0.0618,
          "sell_rate": 0
        },
        {
          "prefix": "9375",
          "destination": "Afghanistan Mobile - AT",
          "buy_rate": 0.1671,
          "sell_rate": 0
        }
      ]
    },
    {
      "carrier_id": 39,
      "carrier_name": "Default",
      "carrier_tier": 1,
      "white_list": [
        35,
        38,
        36,
        34,
        55
      ],
      "black_list": [
        33
      ],
      "ratecard_id": 35179,
      "ratecard_name": "default test 3#201806011721#private#Afghanistan",
      "rating": 0,
      "quality_of_service": 1,
      "resellable": true,
      "carrier_coverage": true,
      "end_ts": "2018-06-01T21:21:43Z",
      "quantity_available": 0,
      "popular_deals": false,
      "rates": [
        {
          "prefix": "93",
          "destination": "Afghanistan Fixed",
          "buy_rate": 0.1708,
          "sell_rate": 0.174216
        },
        {
          "prefix": "9370",
          "destination": "Afghanistan Mobile - AWCC",
          "buy_rate": 0.0618,
          "sell_rate": 0.063036
        },
        {
          "prefix": "9375",
          "destination": "Afghanistan Mobile - AT",
          "buy_rate": 0.1671,
          "sell_rate": 0.170442
        }
      ]
    },
    {
      "carrier_id": 39,
      "carrier_name": "Default",
      "carrier_tier": 1,
      "white_list": [
        38,
        34,
        55,
        37
      ],
      "black_list": [
        35,
        36
      ],
      "ratecard_id": 35180,
      "ratecard_name": "default test 3#201806011721#teleU#Afghanistan",
      "rating": 0,
      "quality_of_service": 1,
      "resellable": true,
      "carrier_coverage": true,
      "end_ts": "2018-06-01T21:21:43Z",
      "quantity_available": 0,
      "popular_deals": false,
      "rates": [
        {
          "prefix": "93",
          "destination": "Afghanistan Fixed",
          "buy_rate": 0.1708,
          "sell_rate": 0
        },
        {
          "prefix": "9370",
          "destination": "Afghanistan Mobile - AWCC",
          "buy_rate": 0.0618,
          "sell_rate": 0
        },
        {
          "prefix": "9375",
          "destination": "Afghanistan Mobile - AT",
          "buy_rate": 0.1671,
          "sell_rate": 0
        }
      ]
    }
  ]

// ! const filterRatesAmount = (array) => array.filter( (arrItem) => arrItem.rates.length > 0 );

const arr = []
for ( let i = 0; i < x.length; i++ ) {
    const type = x[i].ratecard_name.split('#');
    console.log(type);
    const type2 = type[2];
    console.log(type2);
    if (type2 === 'teleU') {
        arr.push(x[i]);
    }
}
console.log(arr);
console.log(arr.length);

// ! 
filterByTeleU = (array) => array.filter( (arrItem) => { 
    const type = arrItem.ratecard_name.split('#')[2];
    if (type === 'teleU')
        return type
});

console.log(filterByTeleU(x));

// !
filterByRatecardTier = (array) => array.filter( (arrItem) => {
    const tier = arrItem.description
});