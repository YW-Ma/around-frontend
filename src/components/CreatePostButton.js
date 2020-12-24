import React, {useState} from 'react';
import { Modal, Button } from 'antd';

function CreatePostButton(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create New Post
      </Button>
      <Modal title="Create New Post"
             confirmLoading={confirmLoading}
             visible={isModalVisible}
             onOk={handleOk}
             onCancel={handleCancel}>
        <p>Some posts...</p>
      </Modal>
    </>
  );
}

export default CreatePostButton;
