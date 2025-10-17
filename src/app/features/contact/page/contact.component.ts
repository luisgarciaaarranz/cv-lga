import {ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge, Subscription} from 'rxjs';
import { TranslationService, Translations } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');
  translations!: Translations;
  private languageSubscription!: Subscription;

  constructor(private translationService: TranslationService) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

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

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set(this.translations.emailRequired);
    } else if (this.email.hasError('email')) {
      this.errorMessage.set(this.translations.emailInvalid);
    } else {
      this.errorMessage.set('');
    }
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return this.translations.emailRequired;
    } else if (this.email.hasError('email')) {
      return this.translations.emailInvalid;
    } else {
      return '';
    }
  }

}
