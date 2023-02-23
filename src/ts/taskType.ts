import Urgency from "./Urgency"

export default interface TaskType {
  id: number
  text: string
  complete: boolean
  urgency: Urgency
}