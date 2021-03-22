const reportWebVitals = (props) => {
  if (props && props instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(props);
      getFID(props);
      getFCP(props);
      getLCP(props);
      getTTFB(props);
    });
  }
};

export default reportWebVitals;
