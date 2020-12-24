import React, {useState, useEffect} from 'react';
import {message, Tabs, Row, Col} from 'antd';
import SearchBar from "./SearchBar"
import PhotoGallery from "./PhotoGallery";
import {BASE_URL, SEARCH_KEY, TOKEN_KEY} from "../constants"
import * as axios from "axios"
const {TabPane} = Tabs;

function Home(props) {
  const [activeTab, setActiveTab] = useState("image");
  const [searchOption, setSearchOption] = useState({
    type: SEARCH_KEY.all,
    keyword: ""
  });

  function fetchPost(option) {
    // collect data
    const { type, keyword } = option;
    let url = '';

    if (type === SEARCH_KEY.all) {
      url = `${BASE_URL}/search`;
    } else if (type === SEARCH_KEY.user) {
      url = `${BASE_URL}/search?user=${keyword}`;
    } else {
      url = `${BASE_URL}/search?keywords=${keyword}`;
    }

    // make request -- carry the token
    const opt = {
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
      },

    }

    axios(opt)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          // setPost(res.data);
          message.success("Enjoy!");
        }
      })
      .catch((err) => {
        message.error("Fetch posts failed!");
        console.log("fetch posts failed: ", err.message);
      });

  }

  // fetch data?
  useEffect(() => {
    console.log('in effect', searchOption)
    // do search the first time -> didMount -> search: {type: all, value: ''}
    // after the first search -> didUpdate -> search: {type: keyword / user, value: value}
    const { type, keyword } = searchOption;
    fetchPost(searchOption); // fetchPost when: did mount, click all, click search button
  }, [searchOption]); // change searchOption when: click all, or click search button

  const renderPost = type =>{};

  const handleSearch = (opt) => {
    // trigger useEffect.
    const {type, keyword} = opt;
    setSearchOption({type: type, keyword: keyword});
  }

  return (
    <div className="home">
      <SearchBar handleSearch={handleSearch}/>
      <div className="display">
        <Tabs
          onChange={(key) => setActiveTab(key)}
          defaultActiveKey="image"
        >
          <TabPane tab="Image" key="image">
            Content
          </TabPane>
          <TabPane tab="Video" key="video">
            <Row>
              {
                <Col></Col>
              }
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
