'use client';
import {useEffect, useState} from 'react'
import {ProChatProvider} from '@ant-design/pro-chat';
import {useTheme} from 'antd-style';
import {
  Avatar,
  Flex,
  Layout,
  Select,
  Card, Spin, Space
} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Meta from "antd/es/card/Meta";
import Control from "@/components/Control";
import Chat from "@/components/Chat";
import Loading from "@/app/loading";
import {flexbox} from "@mui/system";


export default () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      // 定时器逻辑
      setShowComponent(true);
    }, 100); // 0.1秒后显示
    // 清除定时器
    return () => {
      clearTimeout(timerId);
    };

  }, []);

  const [currentMessages, setCurrentMessages] = useState([]);

  const getCurrentMessages = (value: any) => {
    setCurrentMessages(value);
  }


  function mapData(item: any) {
    return {
      content: item.content,
      createAt: 1697862242452, // 转换为时间戳
      id: item.id,
      role: item.role,
      updateAt: 1697862242452, // 转换为时间戳
      meta: {
        avatar: item.meta.avatar,
        title: item.meta.title
      },
      ...(item.parentId && {parentId: item.parentId}), // 可选地添加 parentId
      ...(item.model && {model: item.model}), // 可选地添加 model
      ...(item.extra && {extra: item.extra}) // 可选地添加 extra
    }
  }


  const theme = useTheme();
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: "white",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: "black",
  };


  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    height:'100%',
  };

  return (<div style={{
      height: '100vh',
      width: '100vw',
      margin: "auto",
      overflow: 'hidden',
      display: 'flex',
    }}>
      {showComponent ?
        (
          <Layout >
            <ProChatProvider>
              <Sider width="20%" style={siderStyle}>
                <Control getCurrentMessages={getCurrentMessages}/>

              </Sider>
              <Layout>
                <Header style={{
                  padding: 10, background: theme.colorBgLayout, display: 'flex',
                  alignItems: 'center'
                }}>
                  <Select
                    defaultValue="医学助手basic"
                    style={{width: 150}}
                    options={[
                      {value: '医学助手basic', label: '医学助手basic'},
                      {value: '医学助手plus', label: '医学助手plus'},
                    ]}/>

                </Header>

                <Content >

                  <Chat currentMessagesValue={currentMessages}/>

                </Content>
                <div style={{display:'flex',flex:1,}}>
                  <div style={{backgroundColor: 'black', position: 'absolute', bottom: 0, left: 0,width:'20%'}}>
                    <Card size={'small'} bordered={false} style={{backgroundColor: 'transparent'}}
                    >
                      <Meta
                        avatar={<Avatar size="large"
                                        src="/user.png"/>}
                        title={<a style={{color: "white"}}>lili小萌新</a>}
                        description={<a style={{color: "white"}}>个人账号</a>}
                      />
                    </Card>
                  </div>
                  <Footer style={{textAlign: 'center',flex:1, }}>
                    KnowledgeGraph QS ©{new Date().getFullYear()} Created by Li
                  </Footer>
                </div>

              </Layout>

            </ProChatProvider>
          </Layout>

       ):(<Loading/>)
      }

    </div>
  )

};
