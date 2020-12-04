import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  urlname: string | null = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlname = this.router.snapshot.paramMap.get('myPathVariable');
  }

}
