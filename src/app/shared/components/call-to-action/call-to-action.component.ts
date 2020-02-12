import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() type: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }

}
