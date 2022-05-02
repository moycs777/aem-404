import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  public location: any = "";
  public icon: any = "";
  public currentTemperature: string = '';

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherApi.getLocalPrevision().subscribe((data: any) => {
      this.location = `${data.location.name}, ${data.location.region}`;

      this.currentTemperature = data.current.temp_c;

      const weatherIcon = data.current.condition.icon.substring(data.current.condition.icon.length - 7,  data.current.condition.icon.length);
      this.icon = `../../../assets/icons/weather/64x64/day/${weatherIcon}`;
    })
  }

}
