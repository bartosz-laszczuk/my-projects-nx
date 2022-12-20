import { RandomizationStatus } from '@my-projects-nx/question-randomizer/randomization/util/enums';
import { FieldValue } from 'firebase/firestore';

export interface Randomization {
  id: string;
  currentQuestionId?: string;
  isAnswerHidden: boolean;
  status: RandomizationStatus;
  updated?: FieldValue;
  created: FieldValue;
  uid: string;
}
