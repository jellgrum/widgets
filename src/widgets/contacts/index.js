import ViewComponent from './ViewComponent'
import EditComponent from './EditComponent'
import { ORGANIZE } from '../parentTypes'


export default {
  type: 'CONTACTS',
  name: 'Contacts',
  ViewComponent,
  EditComponent,
  parent: ORGANIZE,
  isExecutable: true,
}
