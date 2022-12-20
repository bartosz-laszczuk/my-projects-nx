import { Injectable } from '@angular/core';
import {
  Randomization as RandomizationBe,
  RandomizationCategory,
  RandomizationUpdateRequest,
} from '@my-projects-nx/question-randomizer/randomization/util/models/backend';
import {
  Category,
  Randomization as RandomizationFe,
} from '@my-projects-nx/question-randomizer/randomization/util/models/frontend';
import {
  DictionaryItem,
  Question,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { serverTimestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class RandomizationMapperService {
  randomizationCategoryToCategory(
    randomizationCategory: RandomizationCategory,
    categories: DictionaryItem[]
  ) {
    return {
      id: randomizationCategory.categoryId,
      name: categories.find(
        (category) => category.id === randomizationCategory.categoryId
      )?.name,
    } as Category;
  }

  dbRandomizationToRandomization(
    dbRandomization: RandomizationBe,
    questionList?: Question[]
  ) {
    const randomization = {
      id: dbRandomization.id,
      created: dbRandomization.created,
      status: dbRandomization.status,
      isAnswerHidden: dbRandomization.isAnswerHidden,
    } as RandomizationFe;
    if (dbRandomization.currentQuestionId) {
      randomization.currentQuestion = questionList?.find(
        (question) => question.id === dbRandomization.currentQuestionId
      );
    }
    return randomization;
  }
  randomizationToRandomizationUpdateRequest(
    randomization: RandomizationFe
  ): RandomizationUpdateRequest {
    return {
      id: randomization.id,
      status: randomization.status,
      currentQuestionId: randomization.currentQuestion?.id ?? null,
      isAnswerHidden: randomization.isAnswerHidden,
      updated: serverTimestamp(),
    } as RandomizationUpdateRequest;
  }
}
