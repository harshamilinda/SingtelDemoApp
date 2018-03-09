import {
  Component,
  OnInit,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.css']
})
export class ProgressLineComponent implements OnInit, OnChanges {


  @Input()
  limit: number = 0;

  @Input()
  barCount: number = 0;

  progress: number = 0;

  minProgress: number = 0;

  maxProgress: number = 100;


  constructor() {}

  ngOnInit() {
      this.progress = this.setProgress();
  }

  setProgress(): number {
      let progress: number = 0;
      progress = Math.round((this.barCount / this.limit) * 100);
      return progress;
  }
  ngOnChanges(): void {
      this.progress = this.setProgress();
  }

}
