import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/analytic`} component={lazy(() => import(`./analytic`))} />
        <Route path={`${match.url}/airdrops`} component={lazy(() => import(`./airdrops`))} />
        <Route path={`${match.url}/stake`} component={lazy(() => import(`./stake`))} />
        <Route path={`${match.url}/bond`} component={lazy(() => import(`./bond`))} />
        <Route path={`${match.url}/docs`} component={lazy(() => import(`./docs`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/analytic`} />
      </Switch>
    </Suspense>
  )
};

export default Dashboards;