import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuItems = [
    { label: 'Home', link: 'home' },
    { label: 'About Us', link: 'aboutus' },
    { label: 'Upcoming Seminars', link: 'upcomingseminars' },
  ];

  isMenuOpen = false;
  headerVisible = true;
  lastScrollTop = 0;

  constructor(private router: Router, private scrollService: ScrollService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  scrollToId(id: string) {
    this.isMenuOpen = false;

    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollService.scrollToElementById(id);
        }, 50);
      });
    } else {
      this.scrollService.scrollToElementById(id);
    }
  }
}
