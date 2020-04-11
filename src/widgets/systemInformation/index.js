import ViewComponent from './viewComponent'
import EditComponent from './editComponent'
import existBrowserApi from './common'


export default {
  type: 'SYSTEM_INFORMATION',
  name: 'System Information',
  ViewComponent,
  EditComponent,
  isExecutable: existBrowserApi,
}
