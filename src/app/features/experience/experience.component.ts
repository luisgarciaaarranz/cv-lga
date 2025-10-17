import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { TranslationService, Translations } from 'src/app/core/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit, OnDestroy {
  translations!: Translations;
  private languageSubscription!: Subscription;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // Initialize translations
    this.translations = this.translationService.getTranslations();
    
    // Subscribe to language changes
    this.languageSubscription = this.translationService.currentLanguage$.subscribe(language => {
      this.translations = this.translationService.getTranslations();
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
