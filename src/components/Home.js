import React, {useState, useEffect} from 'react';
import {Tabs} from 'antd';
import SearchBar from "./SearchBar"
const {TabPane} = Tabs;

function Home(props) {
  const [activeTab, setActiveTab] = useState("image");

  return (
    <div className="home">
      <SearchBar />
      <div className="display">
        <Tabs
          onChange={(key) => setActiveTab(key)}
          defaultActiveKey="image"
        >
          <TabPane tab="Image" key="image">
            Content
          </TabPane>
          <TabPane tab="Video" key="video">
            Content
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
