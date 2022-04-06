import { Component, Input, OnInit } from '@angular/core';
import { DetailAboutModel } from 'src/app/Models/detail-about.model';

@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.css'],
})
export class DetailAboutComponent implements OnInit {
  @Input() details!: DetailAboutModel[];

  constructor() {}

  ngOnInit(): void {}
}
