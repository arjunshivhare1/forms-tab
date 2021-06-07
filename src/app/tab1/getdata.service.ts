import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private httpClient: HttpClient) { }
  getdata(page: number, year='', launch="" ,landing=''){
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches'
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ,{params: {launch_year: year,limit:(10*page).toString(),launch_success: launch, land_success: landing}});
  }
}
