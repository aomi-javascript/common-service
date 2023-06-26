import { ReviewHistory } from './ReviewHistory';
import { ReviewProcess } from './ReviewProcess';
import { ReviewResult } from './ReviewResult';
import { ReviewStatus } from './ReviewStatus';

export type Review<T> = {
  id: string
  before: T
  after: T
  describe: string
  histories: Array<ReviewHistory>
  reviewProcess: ReviewProcess
  currentReviewUserIndex: number
  nextReviewUserIndex: number
  result: ReviewResult
  status: ReviewStatus
  resultDescribe: string
  createAt: number
}
