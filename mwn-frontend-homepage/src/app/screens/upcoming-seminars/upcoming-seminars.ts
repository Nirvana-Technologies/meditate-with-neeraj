import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-seminars',
  imports: [CommonModule],
  templateUrl: './upcoming-seminars.html',
  styleUrl: './upcoming-seminars.scss',
})
export class UpcomingSeminars {
  seminarImages: string[] = [
    'assets/upcomingImage1.svg',
    'assets/upcomingImage2.svg',
    'assets/upcomingImage3.svg',
  ];
}
