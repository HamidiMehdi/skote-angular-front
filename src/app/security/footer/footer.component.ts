import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  date = new Date().getFullYear()
  @Input() text: string = ''
  @Input() textButton: string = ''
  @Input() url: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
