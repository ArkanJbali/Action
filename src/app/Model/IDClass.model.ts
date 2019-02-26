import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
export class Idclass {
  id: string;
  today = new Date();
  jstoday = '';
  constructor(private route: ActivatedRoute) {
    // this.id = id;
    this.id = this.route.snapshot.params.id;
    console.log(this.id, 'inside class id');
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    console.log(this.jstoday);
  }
  getID() {
    console.log(this.id, 'inside class get id');
    return this.id;
  }
  getDate() {
    return this.jstoday;
  }
}
// check injector
