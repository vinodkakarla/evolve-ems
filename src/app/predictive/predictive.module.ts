import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { PredictiveComponent } from "./predictive.component";
import { SalesRatioComponent } from "./predictive-components/sales-ratio/sales-ratio.component";
import { StationUsageComponent } from "./predictive-components/station-usage/station-usage.component";
import { FeedsComponent } from "./predictive-components/feeds/feeds.component";
import { TopSellingComponent } from "./predictive-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./predictive-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./predictive-components/blog-cards/blog-cards.component";
import { EVStatsComponent } from "./predictive-components/ev-stats/ev-stats.component";
import { DemandForecastComponent } from "./predictive-components/demand-forecast/demand-forecast.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Predictive",
      urls: [{ title: "Predictive", url: "/predictive" }, { title: "Predictive" }],
    },
    component: PredictiveComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    PredictiveComponent,
    SalesRatioComponent,
    StationUsageComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    EVStatsComponent,
    DemandForecastComponent
  ],
})
export class PredictiveModule {}
