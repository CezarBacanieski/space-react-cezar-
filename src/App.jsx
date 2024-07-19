import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import bannerBackground from './assets/banner.png';
import Gallery from './components/Gallery';
import photos from './fotos.json';
import { useState } from 'react';

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text='The most complete gallery of space photos!'
              backgroundImage={bannerBackground}
            />
            <Gallery photos={galleryPhotos} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
};

export default App;
