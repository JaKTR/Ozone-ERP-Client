import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../../services/responsive-service/responsive.service";

@Component({
  selector: 'racs-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
  }

}
