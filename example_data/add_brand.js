  curl -XPUT 'http://45.55.228.118:9200/istaging/brand/5767e133fd9907004b6df1bb' -d '{
    "objectId": "5767e133fd9907004b6df1bb",
    "name": "Arredoclassic",
    "description": "Arredoclassic is a young company founded in 1998. The quality of our products is in keeping with the tradition of the master Marche furniture-makers. This tradition is imbued in every product and detail, and breathes life into classic, elegant and unique furniture pieces.",
    "numOfProducts": 5,
    "profileUrl": "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/nV62obaqQ8hzTC6PJ9sVRP3JqQrrekiT02Njgaoo.png",
    "profileUrl_thumbnail": "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/nV62obaqQ8hzTC6PJ9sVRP3JqQrrekiT02Njgaoo.png",
    "website": "http://www.arredoclassic.com",
    "coverImages": [
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/UmeWVUC914KtI8wpu2IECBhHYuGxH7TFdy6u37zj.jpg",
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/U8UNVVgN4PaKFgiprg4zKP6JcJgFbXfC4S0E4GoP.jpg",
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/32O8E5sX6yYtql7ugfQAKqC0hfw3zfoWMzKlqNSP.jpg"
    ],
    "coverImages_thumbnail": [
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/UmeWVUC914KtI8wpu2IECBhHYuGxH7TFdy6u37zj.jpg",
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/U8UNVVgN4PaKFgiprg4zKP6JcJgFbXfC4S0E4GoP.jpg",
      "https://s3.amazonaws.com/avos-cloud-olawrgm0ywtg/32O8E5sX6yYtql7ugfQAKqC0hfw3zfoWMzKlqNSP.jpg"
    ],
    "priceRange": 3
  }'


{"_index":"istaging","_type":"brand","_id":"Arredoclassic","_version":2,"created":false}


Search:
curl 'http://45.55.228.118:9200/istaging/brand/_search?q=objectId:5767e133fd9907004b6df1bb&pretty=true'