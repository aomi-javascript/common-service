/**
 * 资源审核状态
 */
export enum ResourceReviewStatus {
  /**
   * 新增待审核
   */
  ADD_WAIT_REVIEW = 'ADD_WAIT_REVIEW',
  /**
   * 编辑待审核
   */
  EDIT_WAIT_REVIEW = 'EDIT_WAIT_REVIEW',
  /**
   * 审核中
   */
  REVIEWING = 'REVIEWING',
  /**
   * 审核通过
   */
  REVIEW_RESOLVE = 'REVIEW_RESOLVE',
  /**
   * 审核拒绝
   */
  REVIEW_REJECTED = 'REVIEW_REJECTED'
}

