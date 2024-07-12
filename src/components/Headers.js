import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import SubHeadLock from './styledComponents/subHeaderLock.js';

const Headers = () => {
  return <div>
      <Header header={"QuizzyLingo"} />
      <SubHeadLock>
      <SubHeader subHeader={"The fun language learning app!!!"} />
      </SubHeadLock>
    </div>;
};

export default Headers;
