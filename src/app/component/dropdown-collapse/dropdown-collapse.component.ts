import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";

import { FeedsComponent } from "./predictive-components/feeds/feeds.component"

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-collapse.component.html'
})
export class NgbdDropdownBasicComponent {
  // This is for the collapse example
  public isCollapsed = false;

  collapsed = true;
}
