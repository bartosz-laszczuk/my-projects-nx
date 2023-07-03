import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// This should have been put into libs/question-randomizer/shared/util/enums
export enum Language {
  ENGLISH = 'english',
  POLISH = 'polish',
}

// This should be in store
@Injectable()
export class LanguageService {
  private _languageKey = 'language';

  public language$ = new BehaviorSubject<Language>(Language.ENGLISH);

  constructor() {
    const language = localStorage.getItem(this._languageKey) as Language;
    if (language) {
      this.language$.next(language);
    }
  }

  public setLanguage(language: Language) {
    localStorage.setItem(this._languageKey, language);
    this.language$.next(language);
  }
}
