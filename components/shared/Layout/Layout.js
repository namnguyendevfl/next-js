import Head from 'next/head';
import { ContainerChrome, ContainerEdge } from './LayoutStyles';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux'
import store from '../../../app/store';
import { webbrowserSetup } from './LayoutSlice';
import { HeaderSpacing } from '../Header';
import HeaderLinen from '../Header/HeaderLinen';

const HeadComponent = ({webBrowser}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(webbrowserSetup(webBrowser))
  },[webBrowser])
  return (
    <Head>
    <title>Portfolio</title>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
  </Head>
  )
}

export default function Layout (props) {
  const { children, type } = props
  console.log(type)
  const [browser, setBrowser] = useState(null)
  useEffect (() => {
    //Part 1: Detecting webBrowser
    let sBrowser, sUsrAg = navigator.userAgent;
    // The order matters here, and this may report false positives for unlisted browsers.
    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsung Internet";
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge (Legacy)";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Edg") > -1) {
      sBrowser = "Microsoft Edge (Chromium)";
      // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "unknown";
    }
    setBrowser(() => sBrowser)
    if (type === "qna") {
            console.log("found")
            document.querySelector("body").style.height = "100vh";
            document.querySelector("body").style.overflowY = "scroll";
    } else {
      document.querySelector("body").style.overflowY = "auto";
    } 
      
  }, [type, browser])
  return ( <>
    <Provider store = {store}>
      <HeadComponent />
      <HeaderSpacing />
      <HeaderLinen />
        { browser === 'Microsoft Edge (Chromium)'
          && <ContainerEdge> {children} </ContainerEdge>
        }
        { browser !== 'Microsoft Edge (Chromium)'
          && <ContainerChrome> {children} </ContainerChrome>
        } 
      {/* </div> */}
    </Provider>
    </> 
    ) 
}


