import { Component } from '@angular/core';
import { IPlant } from 'src/app/shared/interfaces/plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {

  plant: IPlant = { imagePath: 'assets/images/oranges.jpeg', title: 'Ροδακινιές', description: 'Υποκείμενα: Σπορόφυτο, Ishtara – Ferciana, Cadaman – Avimag, GF677, Puebla de Sotto, Adesoto, Rootpac R Replant pac (POV) CER \n \n Ποικιλίες: Παραδοσιακές και νέες ποικιλίες'}


}
