import json
import requests
import time

f = open("file.json", "r")
data = json.load(f)

f.close()

final_data = []
for i in data['tmp']:
    url = "https://af-cargo-api-cargo.azuremicroservices.io/api/submit"
    response = requests.post(url, json=i)
    print(response.content)
    response_json = response.json

    response = requests.post("http://192.168.4.187:8081/api/graph", json=response_json)
    
    final_data.append(response.json)

    encoded = response.json['graph.png']

    import base64
    import uuid

    fh = open(uuid.uuid4(), "wb")
    fh.write(encoded.decode('base64'))
    fh.close()

