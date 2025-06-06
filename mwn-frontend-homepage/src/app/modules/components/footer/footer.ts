import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  socialIcons = [
    'assets/facebook.svg',
    'assets/twitter.svg',
    'assets/linkedIn.svg',
    'assets/instagram.svg',
    'assets/youtube.svg',
  ];
}
