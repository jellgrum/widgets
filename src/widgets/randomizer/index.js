import ViewComponent from './ViewComponent'
import EditComponent from './EditComponent'
import { OTHER } from '../parentTypes'


export default {
  type: 'RANDOMIZER',
  name: 'Randomizer',
  ViewComponent,
  EditComponent,
  parent: OTHER,
  isExecutable: true,
}
