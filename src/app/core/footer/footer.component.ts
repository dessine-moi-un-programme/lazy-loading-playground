import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @HostBinding('class') class = 'mt-auto';

  constructor() { }

  ngOnInit(): void {
  }

}
