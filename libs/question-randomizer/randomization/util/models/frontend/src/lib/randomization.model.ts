import { RandomizationStatus } from '@my-projects-nx/question-randomizer/randomization/util/enums';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { FieldValue } from 'firebase/firestore';

export interface Randomization {
  id: string;
  currentQuestion?: Question;
  isAnswerHidden: boolean;
  status: RandomizationStatus;
  created: FieldValue;
}
