import DomJsonTree from './index.js';

const json = {
  "_id": "5b542497968fbe5476380045",
  "index": 0,
  "guid": "075e6597-b3ee-4263-9b0d-fb4e8d78a8a2",
  "isActive": true,
  "balance": "$3,592.72",
  "picture": "http://placehold.it/32x32",
  "age": 25,
  "eyeColor": "green",
  "name": {
    "first": "Daugherty",
    "last": "Kelley"
  },
  "company": "XURBAN",
  "email": "daugherty.kelley@xurban.info",
  "phone": "+1 (868) 597-3775",
  "address": "523 Ashford Street, Bourg, Missouri, 5286",
  "about": "Voluptate id aliqua sint ea dolore eu enim cillum commodo. Aute deserunt fugiat Lorem ex exercitation mollit excepteur laborum. Nostrud dolore proident sunt esse ea nisi in nostrud.",
  "registered": "Friday, July 17, 2015 1:45 PM",
  "latitude": "-14.04474",
  "longitude": "-144.238087",
  "example_with_null": null,
  "example_with_null_inside": {
    "key": "value",
    "key2": 199,
    "key3": null
  },
  "tags": [
    "eiusmod",
    "sint",
    "commodo",
    "labore",
    "quis"
  ],
  "range": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "friends": [
    {
      "id": 0,
      "name": "Mcdowell Stout"
    },
    {
      "id": 1,
      "name": "Forbes Blackburn"
    },
    {
      "id": 2,
      "name": "Burnett Baxter"
    }
  ],
  "greeting": "Hello, Daugherty! You have 7 unread messages.",
  "favoriteFruit": "strawberry"
};

it('renders correctly', () => {
  let djt = new DomJsonTree(json, document.body);
  djt.render();
  const node = djt.node;
  expect(node).toMatchSnapshot();
});
