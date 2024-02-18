'use client';
import {useEffect, useState} from 'react'
import {ProChat, useProChat} from '@ant-design/pro-chat';
import {useTheme} from 'antd-style';
import {
    Button,
    Collapse,
    CollapseProps,
} from "antd";
import {
    PauseCircleOutlined,
    SendOutlined
} from "@ant-design/icons";

type ChildComponentProps = {
    currentMessagesValue: any;
    handleNewChatChange: (value: any) => void; // 函数类型：接受一个any类型的参数并且不返回任何内容
};
const Chat: React.FC<ChildComponentProps> = ({handleNewChatChange,currentMessagesValue}) => {

    const [historyMessages, setHistoryMessages] = useState(currentMessagesValue || null);

    /**
     * 父组件传递过来的当前选中消息
     */
    console.log("proChat", currentMessagesValue);

    const proChat = useProChat();
    const theme = useTheme();
    const [showComponent, setShowComponent] = useState(false)
    useEffect(() => {
        setShowComponent(true);
    }, []);

    useEffect(()=>{
        setHistoryMessages(currentMessagesValue);
        console.log("history",historyMessages);
    },[currentMessagesValue]);


    /**
     * 添加（保存）历史消息
     */
    const uuid = require('uuid');
    const addMessages = async (messages: any) => {
        let id = localStorage.getItem("id");

        if (id === null) {
            id = uuid.v4();
        }
        const response = await fetch('/api/qs/add', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                userId: 1,
                messages: messages
            }),
        });
        const res = await response.json();
    }

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: '我是您的专属医学助手，有任何医学问题都欢迎向我提问哦~',
            children: <div>
                <p>
                    <Button
                        type={'text'}
                        onClick={() => {
                            proChat.sendMessage('什么是百日咳?');
                        }}
                        style={{minWidth: 300}}
                    >
                        什么是百日咳?<SendOutlined/>
                    </Button>
                </p>
                <p><Button
                    type={'text'}
                    onClick={() => {
                        proChat.sendMessage('小儿金黄色葡萄球菌肺炎的成因哪些?');
                    }}
                    style={{minWidth: 300}}
                >
                    小儿金黄色葡萄球菌肺炎的成因哪些?<SendOutlined/>
                </Button>
                </p>
                <p>
                    <Button
                        type={'text'}
                        onClick={() => {
                            proChat.sendMessage('怎么治疗特发性肺纤维化?');
                        }}
                        style={{minWidth: 300}}
                    >
                        怎么治疗特发性肺纤维化?<SendOutlined/>
                    </Button>
                </p>
            </div>,
        },
    ];


    return (
        <div
            style={{
                backgroundColor: theme.colorBgLayout,
                height: '85vh',
            }}
        >
            {
                showComponent && <ProChat
                    showTitle
                    displayMode={'docs'}
                    userMeta={{
                        avatar: '/user.png',
                        title: 'lili小萌新',
                    }}
                    helloMessage={
                        <Collapse items={items} defaultActiveKey={['1']}/>
                    }
                    style={{
                        height: '85vh',
                    }}
                    assistantMeta={{
                        avatar: '/doctor.png',
                        title: 'KnowledgeGraph',
                    }}
                    backtoBottomConfig={{
                        render: (_, scrollToBottom) => {
                            return (
                                <Button
                                    type={"default"}
                                    onClick={() => {
                                        proChat.stopGenerateMessage();
                                    }}
                                    style={{
                                        alignSelf: 'flex-end',
                                        width: '100px',
                                        marginRight: '18px',
                                    }}
                                >
                                    <PauseCircleOutlined/>停止响应
                                </Button>
                            );
                        },
                    }}
                    request={async (messages) => {
                        console.log("request", messages);
                        if (messages.length <= historyMessages?.currentMessagesValue?.length) {
                            return new Response(historyMessages.currentMessagesValue[2 * messages.length - 1]?.content);
                        }
                        const response = await fetch('/api/qs', {
                            method: 'POST',
                            //只传递最新一个问题，因为现在还无法做到连续对话
                            body: JSON.stringify({messages: messages[messages.length - 1]}),
                        });
                        const data = await response.json();
                        //保存消息
                        const currentMessages = proChat.getChatMessages();
                        currentMessages[currentMessages.length - 1].content = data.data;
                        await addMessages(currentMessages);

                        //如果最新对话就获取历史消息显示在列表上
                        if(messages.length === 1){
                            const bool = [true];
                            handleNewChatChange(bool);
                        }
                        return new Response(data.data);
                        // const text = await delay(
                        //   `好的，这里有一个简单的笑话。有一次，一只番茄和一只土豆进行赛跑。番茄一直落后，土豆回头看了看，对番茄说:“加油啊，番茄酱”`,
                        // );
                        // return new Response(text);

                    }}
                />
            }
        </div>
    );
}
export default Chat;
