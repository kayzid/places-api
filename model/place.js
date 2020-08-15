
class Place {
    
    constructor(place){
        //console.log(place);
        this.id=place.id;
        this.name=place.name;        
        this.imageUrl=place.imageUrl;
        this.city=place.city;
        this.country=place.country;
        //console.log(this);
    }

    
    getId(){
        return this.id;
    }

    getName(){
        return this.name;        
    }

    getImageUrl(){
        return this.imageUrl;
    }

    getCity(){
        return this.city;
    }

    getCountry(){
        return this.country;
    }

}

module.exports=Place;