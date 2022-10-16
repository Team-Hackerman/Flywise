from requests import request
import requests

def volume(x, y, z): return x*y*z
def density(mass, volume): return mass/volume

def get_values():
    compartments = requests.get(url="https://af-cargo-api-cargo.azuremicroservices.io/api/compartment").json()
    containers = requests.get(url="https://af-cargo-api-cargo.azuremicroservices.io/api/container").json()
    shipments = requests.get(url="https://af-cargo-api-cargo.azuremicroservices.io/api/shipment").json()
    luggage = requests.get(url="https://af-cargo-api-cargo.azuremicroservices.io/api/luggage").json()

    for container in containers:
        container["volume"]  = volume(container["length"], container["width"], container["height"])

    # compartment_conf = [
    #     {"PMC":0,"PAG":0,"AKE":10},
    #     {"PMC":0,"PAG":0,"AKE":10},
    #     {"PMC":0,"PAG":0,"AKE":8},
    #     {"PMC":0,"PAG":2,"AKE":1},
    #     {"PMC":0,"PAG":0,"AKE":1},
    # ]

    no_of_first_class_luggage = luggage["nbFirstClassLuggage"]
    no_of_second_class_luggage = + luggage["nbLuggage"]
    avg_wt = luggage["avgWeight"] 

    for shipment in shipments:
        shipment["volume"]  = volume(shipment["length"], shipment["width"], shipment["height"])
        shipment["density"]  = density(shipment["weight"], shipment["volume"])

    shipments = sorted(shipments, key=lambda k: k['density'], reverse=True)

    result = [
        {
            "compartmentId": 1,
            "containersWithShipments": [],
            "containersWithLuggage": []
        },
        {
            "compartmentId": 2,
            "containersWithShipments": [],
            "containersWithLuggage": []
        },
        {
            "compartmentId": 3,
            "containersWithShipments": []
        },
        {
            "compartmentId": 4,
            "containersWithShipments": []
        },
        {
            "compartmentId": 5,
            "containersWithLuggage": []
        }
    ]
    return (compartments, containers, shipments, luggage, result, no_of_first_class_luggage, no_of_second_class_luggage, avg_wt)


def place_luggage(no_of_luggage, compartment_conf, compartments, result):
    available_luggage = no_of_luggage
    
    if available_luggage >= 38:
        result[4]["containersWithLuggage"].append({
                    "containerType": "AKE",
                    "nbOfLuggage": 38
                    }
                )
        available_luggage -= 38
    else:
        result[4]["containersWithLuggage"].append({
                    "containerType": "AKE",
                    "nbOfLuggage": available_luggage
                    }
                )
        return
    
    print(f"available_luggage: {available_luggage}")
    for i in [1, 2, 3, 4]:
        print(f" i: {i}")
        print(compartment_conf[i-1])
        available_ake = compartment_conf[i-1]["AKE"]
        available_pmc = compartment_conf[i-1]["PMC"]
        available_pag = compartment_conf[i-1]["PAG"]
        available_wt = compartments[i - 1]["maxWeight"]

        print(f"available_ake: {available_ake}")
        for j in range(available_ake):
            compartments[i - 1]["maxWeight"] = available_wt
            if (available_luggage <= 0 or available_wt <= 0):
                break
            luggage_to_add = 38 if available_luggage >= 38 else available_luggage
            # Wt constraint
            wt_to_add = luggage_to_add * 20
            if available_wt < wt_to_add:
                luggage_to_add = available_wt//20
                wt_to_add = luggage_to_add*20

            print(f"j --> {j}")
            compartment_conf[i-1]["AKE"] -= 1

            available_luggage -= luggage_to_add
            available_wt -= wt_to_add
            result[i-1]["containersWithLuggage"].append({
                "containerType": "AKE",
                "nbOfLuggage": luggage_to_add
            })


def place_individual_shipments(i, available_ake, available_pmc, available_pag, available_wt, shipments, containers, result):
    for j in range(available_ake):
        if(len(shipments)<=0): break
        remaining_volume = containers[2]["volume"]*0.89
        if available_wt < shipments[0]["weight"]:
            break

        shipments_to_add = []
        remaining_container_wt = 1588

        while (True):
            if(len(shipments)<=0): break
            if available_wt < shipments[0]["weight"]: break
            
            print(len(shipments))

            if remaining_volume >= shipments[0]["volume"] :
                if(len(shipments)<=0): break
                if available_wt < shipments[0]["weight"] or remaining_container_wt < shipments[0]["weight"]:
                    break


                remaining_container_wt = remaining_container_wt - shipments[0]["weight"]
                available_wt = available_wt - shipments[0]["weight"]
                remaining_volume = remaining_volume - shipments[0]["volume"]
                shipment = shipments.pop(0)
                shipments_to_add.append(shipment["id"])

            else:
                break
        if (len(shipments_to_add) > 0):
            result[i-1]["containersWithShipments"].append({
                "containerType": "AKE",
                "shipments": shipments_to_add
            })

    for j in range(available_pmc):
            if(len(shipments)<=0): break
            remaining_volume = containers[1]["volume"]
            if available_wt < shipments[0]["weight"]:
                break

            shipments_to_add = []
            remaining_container_wt = 6088

            while (True):
                if(len(shipments)<=0): break
                if available_wt < shipments[0]["weight"]: break
                
                print(len(shipments))

                if remaining_volume >= shipments[0]["volume"] :
                    if(len(shipments)<=0): break
                    if available_wt < shipments[0]["weight"] or remaining_container_wt < shipments[0]["weight"]:
                        break


                    remaining_container_wt = remaining_container_wt - shipments[0]["weight"]
                    available_wt = available_wt - shipments[0]["weight"]
                    remaining_volume = remaining_volume - shipments[0]["volume"]
                    shipment = shipments.pop(0)
                    shipments_to_add.append(shipment["id"])

                else:
                    break
            if (len(shipments_to_add) > 0):
                result[i-1]["containersWithShipments"].append({
                    "containerType": "PMC",
                    "shipments": shipments_to_add
                })

    for j in range(available_pag):
        if(len(shipments)<=0): break
        remaining_volume = containers[0]["volume"]
        if available_wt < shipments[0]["weight"]:
            break

        shipments_to_add = []
        remaining_container_wt = 6033

        while (True):
            if(len(shipments)<=0): break
            if available_wt < shipments[0]["weight"]: break
            
            print(len(shipments))

            if remaining_volume >= shipments[0]["volume"] :
                if(len(shipments)<=0): break
                if available_wt < shipments[0]["weight"] or remaining_container_wt < shipments[0]["weight"]:
                    break


                remaining_container_wt = remaining_container_wt - shipments[0]["weight"]
                available_wt = available_wt - shipments[0]["weight"]
                remaining_volume = remaining_volume - shipments[0]["volume"]
                shipment = shipments.pop(0)
                shipments_to_add.append(shipment["id"])

            else:
                break
        if (len(shipments_to_add) > 0):
            result[i-1]["containersWithShipments"].append({
                "containerType": "PAG",
                "shipments": shipments_to_add
        })

def place_shipment(compartment_conf, compartments):
    for i in [3, 4, 2, 1]:
        available_ake = compartment_conf[i-1]["AKE"]
        available_pmc = compartment_conf[i-1]["PMC"]
        available_pag = compartment_conf[i-1]["PAG"]
        available_wt = compartments[i - 1]["maxWeight"]

        place_individual_shipments(i, available_ake, available_pmc, available_pag, available_wt)


def get_final_placements(result):
    import json
    return json.dumps(result)    


def calculate_everything(compartment_conf):
    (compartments, containers, shipments, luggage, result, no_of_first_class_luggage, no_of_second_class_luggage, avg_wt) = get_values()
    place_luggage(no_of_first_class_luggage+no_of_second_class_luggage, compartment_conf, compartments, result)
    print("----this code------")
    
    for i in [4, 3, 2, 1]:
        print("----------------------")
        print(f"{type(i)}")
        available_ake = compartment_conf[i-1]["AKE"]
        available_pmc = compartment_conf[i-1]["PMC"]
        available_pag = compartment_conf[i-1]["PAG"]
        available_wt = compartments[i - 1]["maxWeight"]

        place_individual_shipments(i, available_ake, available_pmc, available_pag, available_wt, shipments, containers, result)

    final_op = get_final_placements(result)
    compartment_volumes = compartment_weights = []
    for i in compartments:
        print(i)

    # get mass of occupied in each compartment
    for conf in compartment_conf:
        pag_volume = conf["PAG"]*containers[0]["volume"]
        pmc_volume = conf["PMC"]*containers[1]["volume"]
        ake_volume = conf["AKE"]*containers[2]["volume"]
        pag_weight = conf["PAG"]*6033
        pmc_weight = conf["PMC"]*6088
        ake_weight = conf["AKE"]*1588
        compartment_volumes.append(pag_volume+pmc_volume+ake_volume)
        compartment_weights.append(pag_weight+pmc_weight+ake_weight)
    
    print(result)

    # get the base64 encoded pic
    url = "https://af-cargo-api-cargo.azuremicroservices.io/api/submit"
    response = requests.post(url, json=result)
    # print(response.content)
    response_json = response.json()
    print(response_json)
    response = requests.post("http://192.168.4.153:8081/api/graph", json=response_json)

    encoded = response.json()['graph.png']
    print(encoded)
    
    return {
        "result": final_op,
        "image" : encoded,
        "compartment_volumes": compartment_volumes,
        "compartment_weights": compartment_weights
    }