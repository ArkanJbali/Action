import { ActivatedRoute } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
export class Idclass {
  id: string;
  today;
  jstoday = '';
  latest_date = '';
  constructor(private route: ActivatedRoute,
    public datepipe: DatePipe) {
    // this.id = id;
    this.id = this.route.snapshot.params.id;
    // console.log(this.id, 'inside class id');
    this.today = new Date();
    this.latest_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    // this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    // console.log(this.jstoday);
  }
  getID() {
    // console.log(this.id, 'inside class get id');
    return this.id;
  }
  getDate() {
    return this.latest_date;
  }
}
// check injector
