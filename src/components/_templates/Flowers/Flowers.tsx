import { FlowersBooklet } from './FlowersBooklet'
import { FlowersCatalog } from './FlowersCatalog'
import { FlowersFeedback } from './FlowersFeedback'
import { FlowersHeader } from './FlowersHeader'
import './Flowers.scss'

export const Flowers = () => {
  return (
    <div className="wrapper">
      <FlowersHeader />
      <FlowersBooklet />
      <FlowersCatalog />
      <FlowersFeedback />
    </div>
  )
}
