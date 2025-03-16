import {Component, input, OnInit} from '@angular/core';
import {SafePipe} from '../../pipes/safe/safe.pipe';
import {NgIf} from '@angular/common';

@Component({
  selector: 'si-embed-google-maps',
  imports: [
    SafePipe,
    NgIf
  ],
  templateUrl: './embed-google-maps.component.html',
  styleUrl: './embed-google-maps.component.scss',
  standalone: true,
})
export class EmbedGoogleMapsComponent implements OnInit {
  street = input.required<string>();
  city = input.required<string>();
  num = input.required<number>();
  mapUrl = '';


  ngOnInit() {
    this.mapUrl = `https://maps.google.com/maps?q=${this.street()}%20${this.num()}%20%${this.city()}&t=&z=20&ie=UTF8&iwloc=&output=embed`
  }

}
