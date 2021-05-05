import React from 'react';

const styles = {
  container: {},
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div className="homeContainer">
    <h1 style={styles.title}>Welcome</h1>
  </div>
);

export default HomeView;
