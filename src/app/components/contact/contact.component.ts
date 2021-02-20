import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  gotoMenu(){
    this.router.navigate(['menu'])
  }

  gotohome(){
    this.router.navigate(['home'])
  }

  gotoContact(){
    this.router.navigate(['contact'])
  }

}
