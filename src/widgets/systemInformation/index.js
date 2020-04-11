import ViewComponent from './viewComponent'
import EditComponent from './editComponent'


const {
  navigator,
  screen,
} = window;

export default {
  type: 'SYSTEM_INFORMATION',
  name: 'System Information',
  ViewComponent,
  EditComponent,
  isExecutable: navigator.language && navigator.platform && screen,
}
