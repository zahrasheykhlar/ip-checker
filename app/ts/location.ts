// could also be just an interface
export class Location {
    id: number;
    ipaddress: string;
    isp: string;
    city: string;
    country: string;
    geonameId: number;
    latitude: number;
    longitude: number;
    postalCode: string;
    region: string;
    timezone: string;

    constructor(id: number,
        ipaddress: string,
        isp: string,
        city: string,
        country: string,
        geonameId: number,
        latitude: number,
        longitude: number,
        postalCode: string,
        region: string,
        timezone: string) {
        this.id = id;
        this.ipaddress = ipaddress;
        this.isp = isp;
        this.city = city;
        this.country = country;
        this.geonameId = geonameId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.postalCode = postalCode;
        this.region = region;
        this.timezone = timezone;
    }
}