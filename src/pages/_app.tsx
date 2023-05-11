import '../styles/index.scss';
import type { AppProps } from 'next/app'
import MainLayout from '@/comps/layouts/MainLayout/MainLayout'
import React, {useEffect} from 'react';
import UIStore from '@/stores/UIStore';
import Router from 'next/router';
import LoadingScreen from '@/comps/app/LoadingScreen/LoadingScreen';

function App({ Component, pageProps }: AppProps) {
  const loadingStart = () => {
    console.log("start");
    UIStore.isLoading = true;
  };

  const loadingEnd = () => {
    console.log("loading done");
    UIStore.isLoading = false;
  };

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", loadingStart);
  //   Router.events.on("routeChangeComplete", loadingEnd);
  //   Router.events.on("routeChangeError", loadingEnd);
  //   return () => {
  //     Router.events.off("routeChangeStart", loadingStart);
  //     Router.events.off("routeChangeComplete", loadingEnd);
  //     Router.events.off("routeChangeError", loadingEnd);
  //   };
  // }, []);

  return (
    <MainLayout>
      {/* <LoadingScreen /> */}
      <Component { ...pageProps } />
    </MainLayout>
  )
}

export default App;