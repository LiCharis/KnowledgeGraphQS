'use client';
import {useEffect, useState} from "react";
import {Avatar, Breadcrumb, Card, Flex, Layout, Menu, Space} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {Footer} from "antd/es/modal/shared";
import Meta from "antd/es/card/Meta";
import {Typography} from 'antd';
import moment from 'moment';
import Loading from "@/app/(backend)/share/[id]/loading";

const {Paragraph, Text} = Typography;
export default function Page({params}: { params: { id: string } }) {

  const id = params.id;
  console.log("here", id)

  const [showComponent, setShowComponent] = useState(false);
  /**
   * 得到所需要分享的消息
   */
  const [messages, setMessages] = useState<any>([]);

  const getMessages = async () => {
    const response = await fetch('/api/qs/getOne', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
    });
    const res = await response.json();
    const messages = res.data.messages;
    setMessages(messages);
    setShowComponent(true);
  }

  //加载数据
  useEffect(() => {
    getMessages();
  }, [])

  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    height: '100%',
  };


  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(60% - 8px)',
    maxWidth: 'calc(70% - 8px)',
    margin: "0 auto",
    height: '100%',
    marginTop: 30
  };
  const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));

  // 根据 id 参数获取页面内容
  return (
    <div>

      {showComponent ?
        (<Layout style={layoutStyle}>
          <Content style={contentStyle}>
            <Card title={<div style={{marginBottom: 25}}><h1>{messages[0]?.content}</h1> <Text
              code>{moment(messages[0]?.createAt).format('YYYY-MM-DD')}</Text></div>} bordered={false}
                  style={{width: '100%', height: 700}}>
              <Space direction="vertical">
                {
                  messages.map((item:any, index:any) => {
                    return (

                      <Card style={{width: 800, marginTop: 16}}>
                        <Meta
                          avatar={<Avatar src={item.meta.avatar}/>}
                          title={item.meta.title}
                          description={<Paragraph copyable>{item.content}</Paragraph>}
                        />
                      </Card>)
                  })
                }
              </Space>
            </Card>
          </Content>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              backgroundColor: '#4096ff',
            }}
          >
            KnowledgeGraph QS ©{new Date().getFullYear()} Created by Li
          </Header>
        </Layout>) :(<Loading/>)
      }

    </div>
  );
};

