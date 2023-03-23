import { Component, Renderer2, ElementRef, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public innerWidth: number = 0;

  @HostListener('window:resize', [])
  private onResize() {
    this.innerWidth = window.innerWidth;
    // fix that resets the hamburger icon and mobile nav if browser is resized to desktop if left open
    if (this.innerWidth >= 768) {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.hamburgerIcon'), 'change')
      this.renderer.setStyle(this.el.nativeElement.querySelector('.mobileNav'), 'display', 'none')
    }
  }

  constructor(public renderer: Renderer2, public el: ElementRef) { }

  showMobileNav(iconElement: HTMLElement) {
    const mobileNav: HTMLElement = this.el.nativeElement.querySelector('.mobileNav');

    if (iconElement.classList.contains('change')) {
      this.renderer.removeClass(iconElement, 'change')
      this.renderer.setStyle(mobileNav, 'display', 'none')
    } else {
      this.renderer.addClass(iconElement, 'change');
      this.renderer.setStyle(mobileNav, 'display', 'block');
    }

  }
}
