import { Component, OnInit } from '@angular/core';
import { PolarisService } from '../../services/polaris.service';
import { Entity } from '../../models/entity.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent implements OnInit{
  entities: Entity[] = [];
  constructor(private polarisService: PolarisService) { }
  ngOnInit(): void {
    this.polarisService.getEntities().subscribe(
      ((response: Entity[]) => {
        this.entities = response;
        console.log([...response]);
      })
    );
  }
}
