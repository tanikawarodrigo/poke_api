import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  showFiller: boolean;
  showImage: boolean;

  constructor(
    
  ) {
    this.showImage = true;
    this.showFiller = false;
   }

  ngOnInit(): void {
  }
  
  
}


