import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';
import { AppState } from '../state/reducers/rootReducer';
import { setLocation } from '../state/actions/actions';


const MapComponent: React.FC = () => {
  const dispatch = useDispatch();
  const coord: number[] = useSelector((state: AppState) => state.coord);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      dispatch(setLocation([coords.latitude, coords.longitude]))
      setReady(true);
    }, () => setReady(true));
  }, [dispatch]);


  return (
    <MapContainer>
      {ready &&
        <YMaps>
          <StyleMap defaultState={{ center: coord, zoom: 14 }}>
            <Placemark geometry={coord} />
          </StyleMap>
        </YMaps>
      }
    </MapContainer>
  )
};

const MapContainer = styled.div`
  height: 311px;
`;
const StyleMap = styled(Map)`
  height: 100%;
  width: 100%;
`

export default MapComponent;