import { Component } from '@angular/core';
import { AboutUs } from '../about-us/about-us';
import { UpcomingSeminars } from '../upcoming-seminars/upcoming-seminars';
import { WhyChooseUs } from '../why-choose-us/why-choose-us';

@Component({
  selector: 'app-home',
  imports: [AboutUs, UpcomingSeminars, WhyChooseUs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
