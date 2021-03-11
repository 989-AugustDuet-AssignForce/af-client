import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { LocationDto } from '../../models/location-dto';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  @Input() selectedLocation: LocationDto;
  constructor() {
   }

  ngOnInit(): void {
  
  }
  
}
