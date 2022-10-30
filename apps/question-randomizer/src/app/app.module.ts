import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionRandomizerShellFeatureModule } from '@my-projects-nx/question-randomizer/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [QuestionRandomizerShellFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
