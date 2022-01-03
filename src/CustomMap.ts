import { User } from './User';
import { Company } from './Company';

// instructions to every other class on how they can be an argument to 'addMarker' method. 
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // carries reference to Google map we created, but limits methods
  private googleMap: google.maps.Map; // an instance of that class from google.maps 

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(entity: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }


}