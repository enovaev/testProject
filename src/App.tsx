import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Link from './components/Link';
import { setTIME } from './state/actions/actions';
import styled from 'styled-components';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTIME());
  }, [dispatch])

  const MapComponent = React.lazy(() => import('./components/MapComponent'));
  const Timer = React.lazy(() => import('./components/Timer'));
  const UserInfo = React.lazy(() => import('./components/UserForm'))

  return (
    <Container>
      <MainContent>
          <Navbar>
            <Link to="/" title="О себе" />
            <Link to="/map" title="Карта" />
            <Link to="/time" title="Таймер" />
          </Navbar>
          <Switch>
            <React.Suspense fallback={
              <Loader>
                <span>Loading...</span>
              </Loader>
            }>
              <Route path="/map" component={MapComponent} />
              <Route path="/time" component={Timer} />
              <Route exact path="/" component={UserInfo} />
            </React.Suspense>
          </Switch>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const MainContent = styled.div`
  width: 100%;
  max-width: 600px;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 311px;
  font-size: 20px;
`;

export default App;
