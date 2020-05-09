import ViewComponent from './ViewComponent'
import EditComponent from './EditComponent'
import { SYSTEM } from '../parentTypes'


export default {
  type: 'SYSTEM_INFORMATION',
  name: 'System Information',
  ViewComponent,
  EditComponent,
  parent: SYSTEM,
  isExecutable: true,
}
