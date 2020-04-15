import ViewComponent from './viewComponent'
import EditComponent from './editComponent'
import SYSTEM from '../parentTypes'


export default {
  type: 'SYSTEM_INFORMATION',
  name: 'System Information',
  ViewComponent,
  EditComponent,
  parent: SYSTEM,
  isExecutable: true,
}
