import { Component, OnInit, } from '@angular/core';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
page=1;
spaceXitem=[];
   launchYear = '';
   successfulaunch ='';
   successfulLanding ='';
   years =[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  constructor(private getdataservice: GetdataService) {}

  reset(): void{
    this.fetchDataByYear('');
    this.fetchDataByLanding('');
    this.fetchDataByLaunch('');
  }


  ngOnInit(){
this.getData();
  }
  getData(){
    this.getdataservice.getdata(this.page, this.launchYear, this.successfulaunch, this.successfulLanding).subscribe((res: []) => {
      console.log(res);
      this.spaceXitem = res;
       });
  }
  fetchDataByYear(year) {
    this.launchYear = year.toString();
    console.log(year);
    this.getData();
  }
  fetchDataByLaunch(launch){
    this.successfulaunch =launch.toString();
    console.log(launch);this.getData();
  }
  fetchDataByLanding(landing){
    this.successfulLanding = landing.toString();
    console.log(landing);
    this.getData();
  }

}
