import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProgressInfoService
} from './services/progress-info.service';
import {
  Bars
} from './model/data';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProgressInfoService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  progressBars: Array < Object > = [];
  triggerValue: number = 0;
  selectedBar: number = 0;
  pBarValuePair: Array < Object > = [];

  constructor(private service: ProgressInfoService) {}

  // Load the data when App component initialized
  ngOnInit(): void {
      this.loadData();
  }
  // Check values of the Progress bar are less than zero
  checkValues(): void {
      let _this: any = this;
      for (let i: number = 0, l: number = _this.pBarValuePair.length; i < l; i++) {
          if (_this.pBarValuePair[i].value < 0) {
              _this.pBarValuePair[i].value = 0;
          }
      }
  }

  btnOnClick(event: Object, triggerValue: string): void {
      let _this: any = this;
      _this.triggerValue = parseInt(triggerValue);
      for (let i: number = 0, l: number = _this.pBarValuePair.length; i < l; i++) {
          if (parseInt(_this.pBarValuePair[i].barId) === parseInt(_this.selectedBar)) {
              let sum: number = _this.pBarValuePair[i].value + _this.triggerValue;
              _this.pBarValuePair[i].value = sum;
              break;
          }
      }
      this.checkValues();
  }
  // Catch onchange event
  selectedProgressBar(event): void {
      let _this: any = this;
      _this.selectedBar = event.target.value;

  }

  loadData(): void {
      let _this: any = this;
      _this.service.getBars().subscribe(bars => {
          _this.progressBars = bars;
          _this.pBarValuePair = _.map(bars.bars, function(obj: Object, key: number) {
              return {
                  barId: key,
                  value: obj
              };
          });
      });
  }
}
