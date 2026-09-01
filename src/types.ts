export interface EbookBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EbookChapter {
  number: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface EbookPagePreview {
  id: string;
  pageNumber: number;
  chapterTitle: string;
  title: string;
  content: string[];
  takeaway: string;
}

export interface AudienceCard {
  id: string;
  role: string;
  useCase: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PaymentStep {
  step: number;
  title: string;
  description: string;
}
