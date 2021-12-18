import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNumber = ''; 
  @Input() name = '';
  @Input() expiration = '';

  constructor() { }

  ngOnInit(): void {
  }

}
