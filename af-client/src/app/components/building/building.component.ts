import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { BuildingService } from '../../services/building.service';
import { BuildingRequestDto } from '../../models/building-request-dto';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{
  menuSelectDOM
  menuSelectValue: number;
  addBuildingForm :FormGroup;
  removeBuildingForm :FormGroup;
  changeCityForm :FormGroup;
  changeNumberOfFloors :FormGroup;
  changeAllFields :FormGroup;
  hideUpdateSuccess: boolean;
  hideSystemError: boolean;



  constructor(private buildingService:BuildingService) {
    this.menuSelectValue = 0;
    this.hideUpdateSuccess = true;
    this.hideSystemError = true;
    this.addBuildingForm = new FormGroup({
      city: new FormControl(''),
      streetAddress: new FormControl(''),
      zipCode: new FormControl(''),
      totalFloors: new FormControl(''),
      locationNumber: new FormControl('')
    })
    this.removeBuildingForm = new FormGroup({
      buildingNumber: new FormControl(''),
      locationNumber: new FormControl('')
    })
    this.changeCityForm = new FormGroup({
      buildingNumber: new FormControl(''),
      cityName: new FormControl('')
    })
    this.changeNumberOfFloors = new FormGroup({
      buildingNumber: new FormControl(''),
      totalFloors: new FormControl('')
    })
    this.changeAllFields = new FormGroup({
      buildingNumber: new FormControl(''),
      city: new FormControl(''),
      streetAddress: new FormControl(''),
      zipCode: new FormControl(''),
      totalFloors: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  menuSelect(value): void{
    this.menuSelectValue=value;
    this.hideSystemError = true;
    this.hideUpdateSuccess = true;
  }
  submitAddBuilding(){
    let dto = new BuildingRequestDto();
    dto.city = this.addBuildingForm.get("city").value;
    dto.street_address = this.addBuildingForm.get("streetAddress").value;
    dto.totalFloors = this.addBuildingForm.get("totalFloors").value;
    dto.zipCode = this.addBuildingForm.get("zipCode").value;
    this.buildingService.addBuilding(this.addBuildingForm.get("locationNumber").value,dto).subscribe(response=>this.systemUpdate(this.addBuildingForm), error=>this.systemFail(error,this.addBuildingForm))
  }


  submitDeleteBuilding(){
    this.buildingService.deleteBuilding(this.removeBuildingForm.get("locationNumber").value,this.removeBuildingForm.get("buildingNumber").value).subscribe(response=>this.systemUpdate(this.removeBuildingForm), error=>this.systemFail(error,this.removeBuildingForm));

  }
  submitChangeCityName(){
    this.buildingService.updateBuildingCity(this.changeCityForm.get("buildingNumber").value, this.changeCityForm.get("cityName").value).subscribe(response=>this.systemUpdate(this.changeCityForm), error=>this.systemFail(error, this.changeCityForm));
  }
  submitFloorChange(){
    this.buildingService.updateNumberOfFloors(this.changeNumberOfFloors.get("buildingNumber").value, this.changeNumberOfFloors.get("totalFloors").value).subscribe(response=>this.systemUpdate(this.changeNumberOfFloors), error=>this.systemFail(error, this.changeNumberOfFloors))
  }
  editBuildingAll(){
    let dto = new BuildingRequestDto();
    dto.city = this.changeAllFields.get("city").value;
    dto.street_address = this.changeAllFields.get("streetAddress").value;
    dto.totalFloors = this.changeAllFields.get("totalFloors").value;
    dto.zipCode = this.changeAllFields.get("zipCode").value;
    this.buildingService.updateBuilding(this.changeAllFields.get("buildingNumber").value, dto).subscribe(response=>this.systemUpdate(this.changeAllFields), error=>this.systemFail(error, this.changeAllFields));
  }
  systemUpdate(group: FormGroup){
    group.reset();
    this.hideSystemError = true;
    this.hideUpdateSuccess =false;

  }
  systemFail(error, form: FormGroup){
    console.log(error);
    this.hideUpdateSuccess = true;
    this.hideSystemError = false;
  }

}
