import { ReviewResult } from './ReviewResult';
import { ResourceReviewStatus } from './ResourceReviewStatus';
import { ReviewStatus } from './ReviewStatus';


export const ResourceReviewStatusText = {
  [ResourceReviewStatus.ADD_WAIT_REVIEW]: '新增待审核',
  [ResourceReviewStatus.ADD_REVIEWING]: '新增审核中',
  [ResourceReviewStatus.ADD_RESOLVE]: '新增审核通过',
  [ResourceReviewStatus.ADD_REJECTED]: '新增审核拒绝',

  [ResourceReviewStatus.EDIT_WAIT_REVIEW]: '编辑待审核',
  [ResourceReviewStatus.EDIT_REVIEWING]: '编辑审核中',
  [ResourceReviewStatus.EDIT_RESOLVE]: '编辑审核通过',
  [ResourceReviewStatus.EDIT_REJECTED]: '编辑审核拒绝'
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
