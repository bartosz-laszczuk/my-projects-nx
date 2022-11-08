import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    // EffectsModule.forFeature([UserEffects]),
  ],
})
export class QuestionRandomizerAuthDataAccessStoreModule {}
