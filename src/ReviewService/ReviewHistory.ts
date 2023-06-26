import { ReviewUser } from './ReviewUser';
import { ReviewResult } from './ReviewResult';

export type ReviewHistory = {
  user: ReviewUser
  result: ReviewResult
  describe: string
  reviewAt: number
}
