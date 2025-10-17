import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService, Translations } from 'src/app/core/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy {

  skillsList: string[] = ['HTML', 'CSS', 'ANGULAR 19', 'WORDPRESS', 'JASMIN', 'KARMA', 'GOLAND', '.NET', 'JAVA', 'POSTGESQL', 'MONGO', 'GITHUB', 'JIRA', 'GOOGLE CLOUD', 'MICROSAAS']
  translations!: Translations;
  private languageSubscription!: Subscription;

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {}

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

  goTo() {
    this.router.navigate(['contact'], );
  }
}
