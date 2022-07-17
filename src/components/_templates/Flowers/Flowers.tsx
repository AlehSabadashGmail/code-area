import { FlowersBooklet } from './FlowersBooklet'
import { FlowersCatalog } from './FlowersCatalog'
import { FlowersQuestions } from './FlowersQuestions'
import { FlowersHeader } from './FlowersHeader'
import './Flowers.scss'

export const Flowers = () => {
  return (
    <div className="wrapper">
      <FlowersHeader />
      <FlowersBooklet />
      <FlowersCatalog />
      <FlowersQuestions />
    </div>
  )
}
