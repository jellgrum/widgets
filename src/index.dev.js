import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Divider,
  Row,
  Col,
} from 'antd'
import 'antd/dist/antd.css'

import { registry } from './widgets'


const RowWrapper = ({ children }) => {
  const [title, EditComponent, ViewComponent] = children

  return (
    <>
      <Divider>{title}</Divider>

      <Row gutter={24}>
        <Col span={12}>
          {EditComponent}
        </Col>
        <Col span={12}>
          {ViewComponent}
        </Col>
      </Row>
    </>
  )
}

const RowSysInfo = () => {
  const { ViewComponent, EditComponent, name } = registry.get('SYSTEM_INFORMATION')
  const [types, setTypes] = useState([])

  return (
    <RowWrapper>
      {[
        name,
        <EditComponent
          key='sys-info-edit'
          handleChange={setTypes}
          types={types}
        />,
        <ViewComponent
          key='sys-info-view'
          types={types}
        />
      ]}
    </RowWrapper>
  )
}

const RowRandomizer = () => {
  const { ViewComponent, EditComponent, name } = registry.get('RANDOMIZER')
  const [settings, updateSettings] = useState({})

  return (
    <RowWrapper>
      {[
        name,
        <EditComponent
          key='randomizer-edit'
          handleChange={updateSettings}
          settings={settings}
        />,
        <ViewComponent
          key='randomizer-view'
          settings={settings}
        />
      ]}
    </RowWrapper>
  )
}

const RowContacts = () => {
  const { ViewComponent, EditComponent, name } = registry.get('CONTACTS')
  const [settings, updateSettings] = useState({})

  return (
    <RowWrapper>
      {[
        name,
        <EditComponent
          key='contacts-edit'
          handleChange={updateSettings}
          settings={settings}
        />,
        <ViewComponent
          key='contacts-view'
          settings={settings}
          extraContacts={[]}
        />
      ]}
    </RowWrapper>
  )
}

const App = () => (
  <div style={{ margin: 12 }}>
    <RowSysInfo />
    <RowRandomizer />
    <RowContacts />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
