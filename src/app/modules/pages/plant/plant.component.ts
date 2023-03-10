import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GlobalDataService } from 'src/app/core/global-data.service';
import { IPlant } from 'src/app/shared/interfaces/plant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  plant: IPlant | undefined;
  private slug: string = this._activatedRoute.snapshot.paramMap.get("slug")!;

  constructor(private _meta: Meta, private _title: Title, private _globalData: GlobalDataService, private _activatedRoute: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void  {
    this.getPlant();
  }

  getPlant(): void {
    this._globalData.getPlants().subscribe((res: IPlant[]) => {
      this.plant = res.find(element => element.slug == this.slug)!;
    })
  }

  backClicked(): void {
    this._location.back();
  }
}
