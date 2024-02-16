'use client';
import {useEffect, useState} from 'react'
import {useProChat} from '@ant-design/pro-chat';
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuProps,
  message,
  Space,
  Modal, Card, notification
} from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  MailOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type {NotificationArgsProps} from 'antd';
import {Typography} from 'antd';
import moment from "moment";

const {Paragraph, Text} = Typography;

type NotificationPlacement = NotificationArgsProps['placement'];

type ChildComponentProps = {
  getCurrentMessages: (value: any) => void; // 函数类型：接受一个any类型的参数并且不返回任何内容
};
const Control = ({getCurrentMessages}:ChildComponentProps) => {
  const proChat = useProChat();
  const uuid = require('uuid');

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      children,
      label,
      type,
      icon,
    } as MenuItem;
  }


  /**
   * 历史消息数组
   */
  const [messageList, setMessageList] = useState<MenuItem[]>();

  const items: MenuItem[] = [

    getItem(<a type="text" onClick={() => {
        proChat.clearMessage();
        localStorage.setItem('id', uuid.v4());
      }}>
        新聊天
        <FormOutlined/>
      </a>, 'new', <Avatar src={<img src={'/logo.svg'} alt="avatar"/>}/>
      ,),

    getItem('历史消息', 'history', <MailOutlined/>, messageList),

  ];

  const [current, setCurrent] = useState('1');
  const onClick: MenuProps['onClick'] = async (e) => {
    if (e.key === 'new' || e.key === 'history') return;
    console.log('click ', e.key);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement, id: any) => {
    const url = `https://knowledge-graph-qs.vercel.app/share/${id}`;
    api.info({
      message: '分享链接',
      description:
        <Paragraph copyable>{url}</Paragraph>,
      placement,
    });
  };


  const share = (messageBody: any) => {
    const messages = messageBody.messages;
    const id = messageBody.id;
    Modal.success({
      width: '40%',
      title: '分享链接',
      content: (
        <Card title="任何人都可以凭借此链接看到你分享的聊天记录" extra={<a href="#">More</a>}
              style={{width: '90%', height: 400, margin: 'auto', overflow: 'auto'}}>
          <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            {
              messages.map((item:any, index:any) => {
                console.log(item.content);
                return (<div key={index}>
                    <p><Avatar src={<img src={item.meta.avatar} alt="avatar"/>}/>{item.meta.title}</p>
                    <p>{item.content}</p>
                  </div>
                )
              })
            }
          </Space>
        </Card>
      ),
      centered: true,
      closable: true,
      maskClosable: true,
      okText: '复制链接',
      cancelText: '关闭',
      onOk() {
        openNotification('top', id);
      },
    });
  }


  /**
   * 得到历史消息
   */
  const getMessages = async () => {
    const response = await fetch('/api/qs/getHistoryList', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
      }),
    });
    const res = await response.json();
    if (res.code === 0) {
      const temp = res.data.map((item:any) => {
        return getItem(<a onClick={() => {
          setMessages(item)
        }}>{item.messages[0].content}</a>, item.id, <Text
          italic>{moment(item.messages[0]?.createAt).format('MM.DD')}</Text>, [getItem(<Button type="primary" danger
                                                                                               ghost
                                                                                               onClick={() => {
                                                                                                 deleteMessages(item.id)
                                                                                               }}><DeleteOutlined/>删除</Button>),
          getItem(<Button type="primary" ghost onClick={() => {
            share(item)
          }}><UploadOutlined/>分享</Button>)])
      })


      setMessageList(temp);
    } else {
      message.error(res.message);
    }
  }
  //检测，获取一次数据
  useEffect(() => {
    //删除上次聊天的id
    localStorage.removeItem("id");
    getMessages();
  }, []);

  /**
   * 获取当前选中的历史数据
   */
  const getOne = async (id: any) => {
    const response = await fetch('/api/qs/getOne', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
    });
    const res = await response.json();
    const messages = res.data.messages;
    return messages;
  }


  // /**
  //  *自动保存
  //  */
  // useEffect(() => {
  //   console.log("开始计时")
  //   // 设置定时器
  //   const autoSaveTimer = setInterval(() => {
  //     console.log("保存");
  //     // 调用保存函数执行自动保存
  //
  //     // addMessages(id);
  //   }, 10000); // 每隔10秒执行一次
  //
  //   // 在组件卸载时清除定时器
  //   return () => clearInterval(autoSaveTimer);
  // }, []); // 依赖项为空数组，表示只在组件挂载和卸载时执行


  /**
   * 删除数据
   */
  const deleteMessages = async (id: any) => {
    const response = await fetch('/api/qs/delete', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
    });
    const res = await response.json();
    if (res.code === 0) {
      proChat.clearMessage();
      localStorage.removeItem("id");
      message.success("删除成功!")
      getMessages();
    } else {
      message.error(res.message);
    }
  }


  /**
   * 重新回到历史消息
   */
  const setMessages = async (MessageBody: any) => {
    const id = MessageBody.id;
    const selectMessage: any = await getOne(id);
    //传递给父组件
    getCurrentMessages(selectMessage);
    console.log("currentId", id);
    localStorage.setItem("id", id);
    proChat.clearMessage();
    for (let i = 0; i < selectMessage.length; i += 2) {
      proChat.sendMessage(selectMessage[i].content);
    }
    // const mappedMessages = [];
    // for (let i = 0; i < selectMessage.length; i += 2) {
    //   const firstMessage = selectMessage[i];
    //   const secondMessage = selectMessage[i + 1];
    //
    //   // 检查是否存在相邻的两个消息
    //   if (firstMessage && secondMessage) {
    //     // 构建成对的对象格式数据
    //     const pairedMessage = {
    //       [secondMessage.id]: mapData(secondMessage),
    //       [firstMessage.id]: mapData(firstMessage),
    //     };
    //     mappedMessages.push(pairedMessage);
    //   } else if (firstMessage) {
    //     // 如果只有一个消息，则将其作为单个对象添加到数组中
    //     const singleMessage = {
    //       firstMessage
    //     };
    //     mappedMessages.push(singleMessage);
    //   }


    //设置初始信息
    // setCurrentMessages(mappedMessages);
    // InitialData = mappedMessages;
    // console.log("mappedMessages", mappedMessages);
    // console.log("================")
    // console.log("currentMessages", currentMessages);
    // console.log("InitialData", InitialData);

  }

  return (
    <div style={{height:'85%',overflow:'auto'}}>
      {contextHolder}
      <Divider/>
        <Menu
          theme="dark"
          onClick={onClick}
          style={{width: '100%',minWidth: 0, flex: "auto"}}
          defaultOpenKeys={['history']}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />

    </div>
  );
};
export default Control;
