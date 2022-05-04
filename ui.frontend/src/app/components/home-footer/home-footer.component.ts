import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {
  @Input() loginUrl: string = '/content/angularapp/us/en/login.html';
  @Input() startAt = 600;
  
  currentValue: number;
  reset = false;
  currentSubscription: Subscription;

  constructor(private loginService: LoginService, private changeDetector: ChangeDetectorRef, private router: Router,) { }

  ngOnInit(): void {  }

  logOut() {
    this.loginService.logOut();
  }

  start() {
    const time: Observable<number> = interval(1000);

    this.currentValue = this.startAt;
    this.changeDetector.detectChanges();

    this.currentSubscription = time
      .pipe(
        take(this.startAt),
        map((v) => this.startAt - (v + 1)),
        finalize(() => {
          if (!this.reset) {
            this.stop();
            this.loginService.logOut();
            this.router.navigate([this.loginUrl]);
          }
        })
      )
      .subscribe((value) => {
        this.reset = false;
        this.currentValue = value;
        this.changeDetector.detectChanges();
      });
  }

  stop() {
    this.currentSubscription.unsubscribe();
  }
}
