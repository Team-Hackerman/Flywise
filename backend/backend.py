from flask import Flask, request, Response
from utils import calculate_everything
from flask import jsonify
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"value": "pong"}), 200

@app.route("/result", methods=["POST"])
def _get_result():
    data = request.json
    print(request.json)
    # data = json.dumps(data)
    # data = json.loads(data)
    # print(data)
    if "compartment_conf" not in data:
        return Response(status=400)

    # get the result based on the compartment_conf
    compartment_conf = data['compartment_conf']
    data = calculate_everything(compartment_conf)
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# @app.route("/", methods=["POST"])
# def get_results(request):
    
if __name__ == "__main__":
    app.config['CORS_RESOURCES'] = {r"*": {"origins": "*"}}
    app.run(debug=True)