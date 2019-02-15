import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
keyid: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'), 'dsadasdasd');
      this.keyid = params.get('id');
    });

  }
}
