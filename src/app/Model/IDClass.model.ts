import { ActivatedRoute } from '@angular/router';
export class Idclass {
  id: string;
  constructor(private route: ActivatedRoute) {
    // this.id = id;
    this.id = this.route.snapshot.params.id;
    console.log(this.id, 'inside class id');
  }
  getID() {
    console.log(this.id, 'inside class get id');
    return this.id;
  }
}
// check injector
