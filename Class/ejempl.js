class Vehicle{
    constructor({id, latitude, longitude}){
        
        this.id=id;
        this.position={latitude, longitude};
        this.status="unavailable"
    };
    set position({latitude, longitude}){
        this.latitude=latitude;
        this.longitude=longitude;
        this.time=Date.now(); 
    };

    get position(){
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
}
let vehicle = new Vehicle({latitude: 28823, longitude: 24233, id:"I23432"});
vehicle.position={latitude:12345, longitude:544321};
console.log(vehicle.position);