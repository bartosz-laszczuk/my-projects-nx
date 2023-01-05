import { Injectable } from '@angular/core';
import {
  Question as QuestionBe,
  QuestionCreateRequest,
} from '@my-projects-nx/question-randomizer/shared/util/models/backend';
import {
  DictionaryItem,
  Question as QuestionFe,
  QuestionCsvListItem,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { serverTimestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuestionMapperService {
  questionToQuestionCreateRequest(question: QuestionFe): QuestionCreateRequest {
    return {
      question: question.question,
      answer: question.answer,
      categoryId: question.categoryId,
      qualificationId: question.qualificationId,
      isActive: question.isActive,
    } as QuestionCreateRequest;
  }

  questionToDbQuestion(question: QuestionFe): QuestionBe {
    return { ...question, updated: serverTimestamp() } as QuestionBe;
  }

  questionDbQuestionFe(
    question: QuestionBe,
    categories: DictionaryItem[]
  ): QuestionFe {
    return {
      ...question,
      categoryName:
        categories.find((c) => c.id === question.categoryId)?.name ?? '',
    };
  }

  questionCsvToQuestionCreateRequest(
    question: QuestionCsvListItem,
    categories: DictionaryItem[],
    qualifications: DictionaryItem[]
  ): QuestionCreateRequest {
    return {
      question: question.question,
      answer: question.answer,
      answerPl: question.answerPl,
      categoryId: categories.find(
        (category) => category.name === question.categoryName
      )?.id,
      qualificationId:
        qualifications.find(
          (qualification) => qualification.name === question.qualificationName
        )?.id ?? null,
      isActive: question.isActive,
      created: serverTimestamp(),
    } as QuestionCreateRequest;
  }
}
