# places-api
This project is a nodejs service which is responsible for reading the data from the CVS file and caching it locally. The first request will be a little slow as the service will read the file and store it memory but the subsequent requests will be fast.

## Development server
Run npm start to start the service on port 3000 by default.

## Notes
This service is repsonsible for reading the local CVS file and populating an array of places. The service supports 2 GET calls:
GET v1/places 
    The GET v1/places api expects optional query params for pagination support so as to not return all the records which it reads from the file.
    Sample Rquest:
    GET localhost:3000/v1/places?limit=10&page=1
    Returns a json array containig as many records as the limit param.
    [
    {
        "id": "1",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/1/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "2",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/2/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "3",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/3/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "4",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/4/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "5",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/5/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "6",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/6/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "7",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/7/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "8",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/8/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "9",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/9/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    },
    {
        "id": "10",
        "name": "Sweet Mid Century Pad W/ Hot Views!",
        "imageUrl": "https://picsum.photos/id/10/200/300.jpg",
        "city": "Palm Springs",
        "country": "US"
    }
]

Possible Error responses:
404 Not Found incase no records are found.
500 Internar Server Error incase of any unxpected exceptions.

GET v1/places/{id}
This api is responsible for getting the details for a particular place
Sample RQ:
GET localhost:3000/v1/places/991
RS:
{
    "id": "991",
    "city": "Palm Springs",
    "country": "US",
    "dateAdded": "2016-01-27T01:07:24Z",
    "dateUpdated": "2016-03-19T00:55:58Z",
    "deposit": "",
    "descriptions": "This location is a permitted vacation lease home with City of Palm Springs. rental Permit PS 4040Mica contentFun and Fabulous, this Palm Springs pool home was designed to take full advantage of the indoor/ outdoor lifestyle that Palm Springs is famous for. This home is full of good energy and plenty of ambiances.A stunning pool home has been completely remodeled inside and out. Enjoy 350 days of sunshine and beautiful Palm Springs weather with a private backyard and fantastic views of the surrounding mountains.Living areas and two bedrooms come complete with hip, modern furnishings plus tasteful art throughout. The attention to detail and unique touches this property offers the ultimate vacation experience to Palm Springs.In the living room you'll find great new furnishings reminiscent of the 1960's - 1980's. The living room with large vaulted ceilings with recessed lighting opens up to a bright kitchen with a small breakfast bar with seating for 2. The kitchen comes supplied with every necessity for fun in the sun dining and entertaining.Each bedroom in this vacation home in Palm Springs is furnished with a flat-screen TV for your enjoyment and is unique in style and decor. The art and bedding create an unique feel and style. You will be inspired by the attention to detail and thoughtful appointment throughout. There is a additional attached bonus room with a modern queen bed and large wall mount. This amazing offering is located in the sort after Palm Springs historic neighborhood of Racquet Club Estates, among dozens of unique vintage homes. Minutes away from some of Palm Springs finest shops, galleries, dining, coffee shops and entertainment.This is the perfect place for those expecting more and only thing better than this custom pool home is the low rates. Air Conditioning En Suite Rooms (1) Grill   Linens Provided Mountain Views Sofa Beds:(1)   Towels Provided",
    "features": "",
    "fees": "[{\"amount\":\"USD 225 / stay\",\"type\":\"Exit ckean\"},{\"amount\":\"USD 158 / stay\",\"type\":\"Pool Heat Weekend each additional day add $79\"}]",
    "languages": "",
    "lat": "33.86007",
    "long": "-116.529495",
    "name": "Fun and Fabulous Budget Friendly Pool Home W/view",
    "numBathroom": "2",
    "numBedroom": "3",
    "numBed": "",
    "numPeople": "8",
    "imageUrl": "https://picsum.photos/id/991/200/300.jpg",
    "petPolicy": "",
    "prices": {
        "dateSeen": "[2016-03-17T00:00:00Z, 2016-01-20T00:00:00Z, 2016-02-09T00:00:00Z]",
        "dateValidEnd": "",
        "dateValidStart": "",
        "minStay": "3 nights",
        "period": "Weekend night",
        "price": "USD 1675"
    },
    "province": "CA",
    "rules": ""
}

Possible Error Codes:
404 Not Found - Incase no records are found.
500 Internal Sever Error - Incase an internal server error orrurs.


