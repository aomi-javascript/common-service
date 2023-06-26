import { ReviewRole } from './ReviewRole';

export type ReviewUser = {
  id: string
  code: string
  name: string
  roles: Array<ReviewRole>
  annotations: any
}
