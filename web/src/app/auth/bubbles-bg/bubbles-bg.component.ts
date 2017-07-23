import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles-bg',
  template: `<ul class="bg-bubbles">
  <li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li>
  <li></li><li></li><li></li><li></li><li></li>
</ul>`,
  styleUrls: ['./bubbles-bg.component.scss']
})
export class BubblesBGComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
