import { ReviewResult } from './ReviewResult';
import { ResourceReviewStatus } from './ResourceReviewStatus';
import { ReviewStatus } from './ReviewStatus';


export const ResourceReviewStatusText = {
  [ResourceReviewStatus.ADD_WAIT_REVIEW]: '新增待审核',
  [ResourceReviewStatus.EDIT_WAIT_REVIEW]: '编辑待审核',
  [ResourceReviewStatus.REVIEWING]: '审核中',
  [ResourceReviewStatus.REVIEW_REJECTED]: '审核拒绝',
  [ResourceReviewStatus.REVIEW_RESOLVE]: '审核通过'
};

export const ReviewResultText = {
  [ReviewResult.RESOLVE]: '审核通过',
  [ReviewResult.REJECTED]: '审核拒绝'
};

export const ReviewStatusText = {
  [ReviewStatus.WAIT]: '等待审核',
  [ReviewStatus.PROCESSING]: '审核中',
  [ReviewStatus.FINISH]: '审核完成'
};
