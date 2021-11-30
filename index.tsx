import React, { useEffect, useState } from 'react'
import Layout from '@xrengine/client/src/components/Layout/Layout'
import DefaultLayoutView from '@xrengine/client/src/components/World/DefaultLayoutView'
import { LoadEngineWithScene } from '@xrengine/client/src/components/World/LoadEngineWithScene'
import { LoadLocationScene } from '@xrengine/client/src/components/World/LoadLocationScene'
import NetworkInstanceProvisioning from '@xrengine/client/src/components/World/NetworkInstanceProvisioning'
import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'

interface Props {
  match?: any
}

const LocationPage = (props: Props) => {
  const { t } = useTranslation()
  const [harmonyOpen, setHarmonyOpen] = useState(false)
  const [reinit, reinitEngine] = useState(false)
  const locationName = props?.match?.params?.locationName
  const engineInit = () => {
    reinitEngine(!reinit)
  }

  debugger
  return (
    <>
      <h1>Hallo</h1>
      <NetworkInstanceProvisioning locationName={locationName} />
      <LoadLocationScene locationName={props.match.params.locationName} />
      <LoadEngineWithScene />
      <Layout
        pageTitle={t('location.locationName.pageTitle')}
        harmonyOpen={harmonyOpen}
        setHarmonyOpen={setHarmonyOpen}
      >
        <DefaultLayoutView allowDebug={true} reinit={engineInit} locationName={locationName} />
      </Layout>
    </>
  )
}

const LocationRoutes = (props) => {
  return (
    <Switch>
      <Route path="/location/:locationName" component={LocationPage} />
    </Switch>
  )
}

export default LocationRoutes

