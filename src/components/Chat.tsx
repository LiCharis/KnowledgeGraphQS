'use client';
import {useEffect, useState} from 'react'
import {ProChat, useProChat} from '@ant-design/pro-chat';
import {useTheme} from 'antd-style';
import {
    Button,
    Collapse,
    CollapseProps, message,
} from "antd";
import {
    PauseCircleOutlined,
    SendOutlined
} from "@ant-design/icons";
import {OpenAIStream, StreamingTextResponse} from "ai";
import {MockResponse} from "@ant-design/pro-chat/es/ProChat/mocks/streamResponse";

type ChildComponentProps = {
    currentMessagesValue: any;
    currentChatId: any;
    handleNewChatChange: (value: any) => void; // 函数类型：接受一个any类型的参数并且不返回任何内容
};
const Chat: React.FC<ChildComponentProps> = ({handleNewChatChange,currentChatId,currentMessagesValue}) => {

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
    const addMessages = async (message: any) => {

        const response = await fetch('/api/chat/add', {
            method: 'POST',
            body: JSON.stringify({
                id: currentChatId,
                userId: 1,
                messages: message
            }),
            credentials: 'include', // 添加此行
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
                        title: 'MultiRoundConversationChat',
                    }}
                    backtoBottomConfig={{
                        render: (_, scrollToBottom) => {
                            return (
                                <Button
                                    type={"default"}
                                    onClick={() => {
                                        const messages = proChat.getChatMessages();
                                        const { id, content } = messages.at(-1) || {};
                                        if (!messages.length) {
                                            message.warning('会话为空');
                                        } else {
                                            if (!id) return;
                                            proChat.setMessageContent(id, "停止生成...");
                                        }
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
                        console.log("request.length", messages.length);
                        console.log("historyMessages.length",historyMessages?.length)
                        if (messages.length <= historyMessages?.length) {
                            return new Response(historyMessages[2 * messages.length - 1]?.content);
                        }
                        const response = await fetch('/api/chat', {
                            method: 'POST',
                            //只传递最新一个问题，因为现在还无法做到连续对话
                            body: JSON.stringify(messages[messages.length - 1]),
                        });


                        let data = undefined;
                        try {
                            data = await response.json();
                        }catch (error:any){
                            data = {data:"请求超时，服务器错误...😥"}
                        }

                        //保存消息
                        const currentMessages = proChat.getChatMessages();
                        currentMessages[currentMessages.length - 1].content = data.data;
                        // 添加长度检查
                        if (currentMessages.length >= 2) {
                            const lastTwoMessages = currentMessages.slice(-2);
                            await addMessages(lastTwoMessages);
                        } else {
                            // 如果消息少于2条，传递所有可用消息
                            await addMessages(currentMessages);
                        }

                        //如果最新对话就获取历史消息显示在列表上
                        if(messages.length === 1){
                            const bool = [true];
                            handleNewChatChange(bool);
                        }
                        // const mockResponse = new MockResponse(data.data, 10);
                        //
                        // return mockResponse.getResponse();
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
