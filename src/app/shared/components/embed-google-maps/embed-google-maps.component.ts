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
  /** This component will display a google map with the given address */

  street = input.required<string>();
  city = input.required<string>();
  num = input.required<number>();
  mapUrl = '';


  ngOnInit() {
    /**
     * In the readme file, we want to display an embedded Google map.
     * I choose to use the actual mapUrl address to display a dynamic map without using the google API Key.
     * The classic embed is working, and it is on the template. To see the classic embed, you have to uncomment the classic iframe and comment the dynamic iframe.
     */
    this.mapUrl = `https://maps.google.com/maps?q=${this.street()}%20${this.num()}%20%${this.city()}&t=&z=20&ie=UTF8&iwloc=&output=embed`
  }

}
