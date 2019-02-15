import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
keyid: string;
  constructor(private route: ActivatedRoute) {
      this.keyid = this.route.snapshot.params.id;
    console.log(this.keyid, 'route');
   }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log(params.get['id'], 'dsadasdasd');
    //   this.keyid = params.get['id'];
    // });

  }
}
