import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  @Input() selectedLocation: any;
  constructor() {
   }

  ngOnInit(): void {
    this.selectedLocation = {...this.selectedLocation};
  }
  
}
