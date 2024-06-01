import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    
NgIf
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent implements OnInit,OnChanges{

  @Input() item:string | undefined;

  ngOnInit(): void {

  }
ngOnChanges(): void {
    
}

}
