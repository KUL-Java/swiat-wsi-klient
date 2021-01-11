import {Component, OnInit} from '@angular/core';
import {VillageService} from "../_shared/services/village.service";
import {Village} from "../_shared/model/village";

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  village: Village;

  constructor(private villageService: VillageService) {
  }

  ngOnInit(): void {
    this.villageService.fetchVillage()
      .subscribe(
        village => this.village = village)
  }

}
