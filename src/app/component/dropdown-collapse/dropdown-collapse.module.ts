import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgbdDropdownBasicComponent } from "./dropdown-collapse.component";
import { SalesRatioComponent } from "./predictive-components/sales-ratio/sales-ratio.component";
import { StationUsageComponent } from "./predictive-components/station-usage/station-usage.component";
import { FeedsComponent } from "./predictive-components/feeds/feeds.component";
import { TopSellingComponent } from "./predictive-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./predictive-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./predictive-components/blog-cards/blog-cards.component";
import { EVStatsComponent } from "./predictive-components/ev-stats/ev-stats.component";


// const routes: Routes = [
//   {
//     path: "",
//     data: {
//       title: "Predictive Insights",
//       urls: [{ title: "Predictive Insights", url: "/dashboard" }, { title: "Dashboard" }],
//     },
//     component: NgbdDropdownBasicComponent,
//   },
// ];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    NgbdDropdownBasicComponent,
    SalesRatioComponent,
    StationUsageComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    EVStatsComponent
  ],
})
export class DropDownModule {}
