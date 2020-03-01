#if geopy is not installed then do -> pip install geopy 
from geopy.geocoders import Nominatim
from geopy.distance import geodesic

def getBill(pickup_loc, drop_loc, ride_mode):
    #fare for different ride modes
    dict_fare_per_meter = {
        'bike': 0.005,
        'auto': 0.01,
        'mini': 0.03,
        'micro': 0.02,
        'prime': 0.05
    }
    #get the latitude and longitude of two points(drop and pick-up)
    geolocator = Nominatim(user_agent="test_billing_app")
    
    if (geolocator.geocode(pickup_loc) is not None) and (geolocator.geocode(drop_loc) is not None):
        #create tuples for latitude logitude
        pickup_location = (geolocator.geocode(pickup_loc).latitude, geolocator.geocode(pickup_loc).longitude)
        drop_location = (geolocator.geocode(drop_loc).latitude, geolocator.geocode(drop_loc).longitude)

        if ride_mode.lower() in dict_fare_per_meter.keys():
            #calculate distance
            distance = geodesic(pickup_location, drop_location).km * 1000
            #return fare
            return round(distance * dict_fare_per_meter[ride_mode.lower()], 2)
        else:
            print("Invalid ride mode")
            return -1
    else:
        print("One of the locations you have entered is not valid")
        return -1
    


ride_mode = input("Enter your ride mode:\nBike\nauto\nmicro\nmini\nprime\n")
pickup_loc = input("Enter pick up location:\n")
drop_loc = input("Enter drop location:\n")
bill_amount = getBill(pickup_loc, drop_loc, ride_mode)
if (bill_amount > -1):
    print("You bill is {} for Uber {} ride from {} to {}".format(bill_amount, ride_mode, pickup_loc, drop_loc))