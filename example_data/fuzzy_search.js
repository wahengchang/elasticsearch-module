pretty' -d' { "query": { "fuzzy" : { "user" : "Try" } } }'

curl -XGET 'localhost:9200/_search?pretty' -d' { "query": { "fuzzy" : { "description" : "ki" } } }'