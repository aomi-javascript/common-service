import { ReviewStep } from './ReviewStep';


export type ReviewProcess = {
  id: string
  name: string
  remark: string
  chain: Array<ReviewStep>
}
