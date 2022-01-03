/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map'); // create instance of map via constructor 
// CustomMap.googleMap can't be accessed. Successfully limited access. 

customMap.addMarker(user);
customMap.addMarker(company);
