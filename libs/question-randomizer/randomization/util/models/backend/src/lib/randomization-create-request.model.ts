import { RandomizationStatus } from '@my-projects-nx/question-randomizer/randomization/util/enums';
import { FieldValue } from 'firebase/firestore';

export interface RandomizationCreateRequest {
  uid: string;
  status: RandomizationStatus;
  created: FieldValue;
}
