import { Component, ElementRef, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router';
import { ContactComponent } from '../../contact/page/contact.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { AboutMeComponent } from '../../about-me/page/about-me.component';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { TranslationService, Translations } from 'src/app/core/services/translation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AboutMeComponent, ContactComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('container', { static: true }) container!: ElementRef;
  currentSection = 0;
  translations!: Translations;
  private languageSubscription!: Subscription;

  constructor(
    private router: Router, 
    private scroll: ScrollService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    // Initialize translations
    this.translations = this.translationService.getTranslations();
    
    // Subscribe to language changes
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(language => {
      this.translations = this.translationService.getTranslations();
    });
    
    // Initialize scroll reveal effects
    this.initScrollReveal();
  }

  initScrollReveal(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all sections
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        observer.observe(section);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  goTo(route: string) {
    this.scroll.scrollTo(route)
  }


}
