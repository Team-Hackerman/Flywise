from flask import Flask, jsonify, request
import requests
import base64
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import base64
import io
import json

app = Flask(__name__)

@app.route("/graph-data", methods = [ 'POST'])
def graph_data():
    payload = json.loads(request.data)
    b64 = requests.post("https://af-cargo-api-cargo.azuremicroservices.io/api/submit",json=payload)
    b64 = b64.json()

    graph=requests.post("http://localhost:8081/api/graph/",json=b64,timeout=(1, 5)).json()
    y=graph["coordinates - y"]
    x=graph["coordinates - x"]
    i =graph["graph.png"]
    # i = io.BytesIO(i)
    # i = mpimg.imread(i, format='JPG')

    # plt.imshow(i, interpolation='nearest')
    # plt.show()

    return jsonify({"image":i,"coordinates":{"x":x,"y":y}})