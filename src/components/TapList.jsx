import React from 'react';

function TapList() {
  const kegs = [
    {
      'id': 1,
      'name': 'Pabst Blue Ribbon',
      'price': '3.00',
      'brewery': 'Pabst Brewing Company',
      'abv': '0.0474',
      'style': 'American Adjunct Lager',
      'pintsLeft': 41,
      'img': 'https://images.heb.com/is/image/HEBGrocery/000942934-1?id=ZkuRh0&fmt=jpg&fit=constrain,1&wid=296&hei=296'
    },
    {
      'id': 2,
      'name': 'Tecate',
      'price': '3.00',
      'brewery': 'Cervecería Cuauhtémoc Moctezuma, S.A. de C.V.',
      'abv': '0.0450',
      'style': 'American Adjunct Lager',
      'pintsLeft': 4,
      'img': 'https://cdn.shopify.com/s/files/1/2017/0991/products/Tecate_Beer_24_oz_Can_800x.jpeg?v=1513468824'
    },
    {
      'id': 3,
      'name': 'Olde English 800',
      'price': '1.50',
      'brewery': 'Miller Brewing Company',
      'abv': '0.0590',
      'style': 'American Malt Liquor',
      'pintsLeft': 16,
      'img': 'https://images.heb.com/is/image/HEBGrocery/000112994-1?id=gvXRV2&fmt=jpg&fit=constrain,1&wid=296&hei=296'
    },
    {
      'id': 4,
      'name': 'Hurricane High Gravity Malt Liquor',
      'price': '1.00',
      'brewery': 'Anheuser-Busch',
      'abv': '0.0810',
      'style': 'American Malt Liquor',
      'pintsLeft': 44,
      'img': 'https://images.heb.com/is/image/HEBGrocery/prd-small/hurricane-high-gravity-malt-liquor-bottle-001006516.jpg'
    },
    {
      'id': 5,
      'name': 'King Cobra Premium Malt Liquor',
      'price': '1.50',
      'brewery': 'Anheuser-Busch',
      'abv': '0.0600',
      'style': 'American Malt Liquor',
      'pintsLeft': 99,
      'img': 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9c4b5a93-e016-4a81-a836-b72a81a658f1.JPG'
    },
    {
      'id': 6,
      'name': 'Rocket Fuel Malt Liquor',
      'price': '2.00',
      'brewery': 'Northrop-Grumman Corporation',
      'abv': '0.0874',
      'style': 'American Malt Liquor',
      'pintsLeft': 6,
      'img': 'https://www.yourprops.com/movieprops/default/4b5bb6b8aa7fb/NewsRadio-Rocket-Fuel-Malt-Liquor-Prop-from-NewsRadio-1.jpg'
    },
    {
      'id': 7,
      'name': 'Beer Baron\'s Disgusting Ultrabitter Hopsplosion',
      'price': '6.50',
      'brewery': 'Beer Baron Brewing',
      'abv': '0.0680',
      'style': 'Imperial IPA',
      'pintsLeft': 124,
      'img': 'https://static.shoplightspeed.com/shops/609604/files/003884483/156x230x1/sierra-nevada-hoptimum-imperial-ipa-12oz-sgl.jpg'
    },
    {
      'id': 8,
      'name': 'Steel Reserve 211 High Gravity',
      'price': '2.00',
      'brewery': 'Steel Brewing Company',
      'abv': '0.0810',
      'style': 'American Malt Liquor',
      'pintsLeft': 0,
      'img': 'https://images.heb.com/is/image/HEBGrocery/000683820'
    }
  ];

  return (
    <div>
      <h1>TAP LIST</h1>
      <ul>
        {kegs.map(keg =>
          <li key={keg.id}>{keg.name}</li>
        )}
      </ul>
    </div>
  );
}

export default TapList;
