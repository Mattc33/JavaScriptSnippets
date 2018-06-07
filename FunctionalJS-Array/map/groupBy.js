    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            if (!map.has(key)) {
                map.set(key, [item]);
            } else {
                map.get(key).push(item);
            }
        });
        return map;
    }

    const rates = [
        {
          "prefix": "93",
          "prefix_6181": "93",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9320",
          "prefix_6181": "9320",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9330",
          "prefix_6181": "9330",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9340",
          "prefix_6181": "9340",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9350",
          "prefix_6181": "9350",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9360",
          "prefix_6181": "9360",
          "buyrate_6181": 0.1525,
          "sellrate_6181": 13.725
        },
        {
          "prefix": "9370",
          "prefix_6181": "9370",
          "buyrate_6181": 0.0949,
          "sellrate_6181": 8.541
        },
        {
          "prefix": "9372",
          "prefix_6181": "9372",
          "buyrate_6181": 0.1035,
          "sellrate_6181": 9.315
        },
        {
          "prefix": "9375",
          "prefix_6181": "9375",
          "buyrate_6181": 0.168,
          "sellrate_6181": 15.12
        },
        {
          "prefix": "9377",
          "prefix_6181": "9377",
          "buyrate_6181": 0.13,
          "sellrate_6181": 11.7
        },
        {
          "prefix": "9378",
          "prefix_6181": "9378",
          "buyrate_6181": 0.0985,
          "sellrate_6181": 8.865
        },
        {
          "prefix": "9379",
          "prefix_6181": "9379",
          "buyrate_6181": 0.1035,
          "sellrate_6181": 9.315
        },
        {
          "prefix": "93",
          "prefix_6389": "93",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.205
        },
        {
          "prefix": "9320",
          "prefix_6389": "9320",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.183
        },
        {
          "prefix": "9330",
          "prefix_6389": "9330",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.183
        },
        {
          "prefix": "9340",
          "prefix_6389": "9340",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.183
        },
        {
          "prefix": "9350",
          "prefix_6389": "9350",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.183
        },
        {
          "prefix": "9360",
          "prefix_6389": "9360",
          "buyrate_6389": 0.1525,
          "sellrate_6389": 0.183
        },
        {
          "prefix": "9370",
          "prefix_6389": "9370",
          "buyrate_6389": 0.0949,
          "sellrate_6389": 0.08
        },
        {
          "prefix": "9372",
          "prefix_6389": "9372",
          "buyrate_6389": 0.1035,
          "sellrate_6389": 0.093
        },
        {
          "prefix": "9375",
          "prefix_6389": "9375",
          "buyrate_6389": 0.168,
          "sellrate_6389": 0.217
        },
        {
          "prefix": "9377",
          "prefix_6389": "9377",
          "buyrate_6389": 0.13,
          "sellrate_6389": 0.092
        },
        {
          "prefix": "9378",
          "prefix_6389": "9378",
          "buyrate_6389": 0.0985,
          "sellrate_6389": 0.038
        },
        {
          "prefix": "9379",
          "prefix_6389": "9379",
          "buyrate_6389": 0.1035,
          "sellrate_6389": 0.093
        },
        {
          "prefix": "93",
          "prefix_7652": "93",
          "buyrate_7652": 0.23856,
          "sellrate_7652": 21.47
        },
        {
          "prefix": "937",
          "prefix_7652": "937",
          "buyrate_7652": 0.26096,
          "sellrate_7652": 23.486
        },
        {
          "prefix": "9370",
          "prefix_7652": "9370",
          "buyrate_7652": 0.1176,
          "sellrate_7652": 10.584
        },
        {
          "prefix": "9372",
          "prefix_7652": "9372",
          "buyrate_7652": 0.1764,
          "sellrate_7652": 15.876
        },
        {
          "prefix": "9374",
          "prefix_7652": "9374",
          "buyrate_7652": 0.182,
          "sellrate_7652": 16.38
        },
        {
          "prefix": "9375",
          "prefix_7652": "9375",
          "buyrate_7652": 0.24234,
          "sellrate_7652": 21.811
        },
        {
          "prefix": "9376",
          "prefix_7652": "9376",
          "buyrate_7652": 0.161,
          "sellrate_7652": 14.49
        },
        {
          "prefix": "9377",
          "prefix_7652": "9377",
          "buyrate_7652": 0.161,
          "sellrate_7652": 14.49
        },
        {
          "prefix": "9378",
          "prefix_7652": "9378",
          "buyrate_7652": 0.2065,
          "sellrate_7652": 18.585
        },
        {
          "prefix": "9379",
          "prefix_7652": "9379",
          "buyrate_7652": 0.1764,
          "sellrate_7652": 15.876
        }
      ];

    const prefixArr = [];
    for ( let i = 0; i < rates.length; i++) {
        prefixArr.push(rates[i].prefix);
    }

    console.log(prefixArr);

    const uniquePrefixArr = prefixArr.filter(function(item, pos) {
        return prefixArr.indexOf(item) == pos;
    });

    console.log(uniquePrefixArr);

    let groupedByPrefix = [];
    for ( let i = 0; i < uniquePrefixArr.length; i++) {
        groupedByPrefix = groupBy(rates, rate => rate.prefix);
    }

    console.log(Array.from(groupedByPrefix));

    const groupByPrefixMapped = Array.from(groupedByPrefix);

    const groupedByPrefixArr = [];
    for ( let i = 0; i < groupByPrefixMapped.length; i++) {
        groupedByPrefixArr.push(
            groupByPrefixMapped[i][1]
        );
    }

    console.log(groupedByPrefixArr);

    const finalRowData = [];
    for ( let i = 0; i < groupedByPrefixArr.length; i++) {
         finalRowData.push(
            Object.assign.apply({}, groupedByPrefixArr[i])
         );
    }

    console.log(finalRowData);


