import { Component } from '@angular/core';
import { PolarisService } from '../../services/polaris.service';
import { Entity } from '../../models/entity.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  constructor(private polarisService: PolarisService) {}
}
