import { Component, OnInit } from '@angular/core';
import { PolarisService } from '../../services/polaris.service';
import { Entity } from '../../models/entity.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent implements OnInit {
  entities: Entity[] = [];

  description: string = '';
  qtyOrder: string = '';
  deliveryDate: string = '';

  constructor(private polarisService: PolarisService) {}

  ngOnInit(): void {
    this.polarisService.getAllEntities().subscribe((response: Entity[]) => {
      this.entities = response;
    });
  }

  createEntity() {
    if (!this.description || !this.qtyOrder) {
      console.error('Inserisci tutti i campi');
      return;
    }

    const newEntity: Entity = {
      id: Math.random(),
      description: this.description,
      qtyOrder: +this.qtyOrder,
      deliveryDate: +this.deliveryDate,
    };

    this.polarisService.addEntity(newEntity).subscribe(
      (response: Entity) => {
        console.log('Nuova entità creata', response);
        this.entities.push(response);
      },
      (err: any) => {
        console.error('Si è verificato un errore', err);
      }
    );
  }
}
