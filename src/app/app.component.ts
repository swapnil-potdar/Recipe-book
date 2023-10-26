import { Component } from '@angular/core';

/* import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from '@exclaimer/ui/icon';
import { IconModule } from '@exclaimer/ui/icon';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
