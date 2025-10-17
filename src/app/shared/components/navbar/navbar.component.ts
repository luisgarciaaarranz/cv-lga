import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { TranslationService, Translations } from 'src/app/core/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeSection: string = 'home';
  currentLanguage: 'es' | 'en' = 'es';
  translations!: Translations;
  private languageSubscription!: Subscription;

  constructor(
    private scroll: ScrollService, 
    private router: Router,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.scrollToInitialSection();
    window.addEventListener('scroll', this.onScroll.bind(this));
    
    // Initialize translations
    this.translations = this.translationService.getTranslations();
    this.currentLanguage = this.translationService.getCurrentLanguage();
    
    // Subscribe to language changes
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
      this.translations = this.translationService.getTranslations();
    });
  }

  scrollTo(section: string): void {
    this.scroll.scrollTo(section);
  }

  private scrollToInitialSection(): void {
    const currentPath = this.router.url.replace('/', '').trim();
    if (currentPath) {
      setTimeout(() => this.scrollTo(currentPath), 200); // Asegurar que Angular renderiza antes del scroll
    }
  }

  onScroll(): void {
    const sections = ['home', 'about', 'experience', 'contact'];
  
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section;
          history.replaceState(null, '', `/${section}`);
        }
      }
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    this.translationService.setLanguage(newLanguage);
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
