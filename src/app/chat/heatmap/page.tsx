'use client';
import { useEffect, useState, useCallback } from 'react';
import { Layout, Typography, Card, Divider, Tabs, Spin, message, Space } from 'antd';
import { FundOutlined, LineChartOutlined, FireOutlined, NodeIndexOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import ChatHeatmap from '@/components/ChatHeatmap';
import dynamic from 'next/dynamic';

// 动态导入权重趋势图组件，避免SSR问题
const WeightTrendChart = dynamic(() => import('@/components/WeightTrendChart'), { 
  ssr: false,
  loading: () => (
    <Card>
      <Spin tip="加载中..." />
    </Card>
  )
});

// 动态导入语义网络组件，避免SSR问题
const SemanticNetwork = dynamic(() => import('@/components/SemanticNetwork'), { 
  ssr: false,
  loading: () => (
    <Card>
      <Spin tip="加载中..." />
    </Card>
  )
});

const { Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

// 定义对话记录接口
interface DialogueRecord {
  query: string;
  response: string;
  timestamp: number;
  turnIndex: number;
  weight: number;
  semanticFeature: {
    keywords: string[];
    topics: Record<string, number>;
    frequency: number;
    embedding: number[];
    entities: string[];
    coherenceScore: number;
  };
}

interface Config {
  timeWeight: number;
  frequencyWeight: number;
  semanticWeight: number;
  similarityWeight: number;
  timeFactorWeight: number;
}

export default function HeatmapPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [dialogueHistory, setDialogueHistory] = useState<DialogueRecord[]>([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [config, setConfig] = useState<Config>({
    timeWeight: 0.33,
    frequencyWeight: 0.33,
    semanticWeight: 0.34,
    similarityWeight: 0.7,
    timeFactorWeight: 0.3,
  });

  // 检查登录状态
  const checkLoginStatus = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8130/api/auth/checkLogin", {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({})
      });
      const data = await response.json();

      if (!data.data) {
        message.error('请先登录');
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('检查登录状态失败:', error);
      message.error('检查登录状态失败');
      router.push('/auth/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // 获取带权重的对话历史
  const fetchHistoryWithWeights = useCallback(async () => {
    try {
      setHistoryLoading(true);
      const response = await fetch("http://localhost:8130/api/chat/historyWithWeights", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({})
      });
      const data = await response.json();
      
      if (data.code === 0 && data.data) {
        setDialogueHistory(data.data);
      } else {
        console.error('获取带权重的对话历史失败:', data.message);
        message.error('获取对话历史失败');
      }
    } catch (error) {
      console.error('获取带权重的对话历史失败:', error);
      message.error('获取对话历史失败');
    } finally {
      setHistoryLoading(false);
    }
  }, []);

  // 处理配置变化
  const handleConfigChange = async (newConfig: Config) => {
    try {
      setIsLoading(true);
      // 调用后端 API 更新配置并获取新的历史记录
      const response = await fetch('http://localhost:8130/api/chat/changePreference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: 1,
          ...newConfig
      }),
      });
      
      if (!response.ok) throw new Error('Failed to update config');
      setConfig(newConfig); 
    } catch (error) {
      console.error('Error updating config:', error);
      message.error('更新配置失败');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (mounted) {
        await checkLoginStatus();
        // 登录检查完成后获取对话历史
        await fetchHistoryWithWeights();
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, [checkLoginStatus, fetchHistoryWithWeights]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ 
      minHeight: '100vh',
      background: '#f0f2f5',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.05) 0%, rgba(67, 134, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
        pointerEvents: 'none',
      }} />
      
      <Content style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Card
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            marginBottom: '24px',
          }}
        >
          <Title level={2} style={{ 
            margin: '0 0 8px 0',
            background: 'linear-gradient(45deg, #7C4DFF, #4386FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            <FireOutlined /> 对话热力分析
          </Title>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            通过热图可视化展示对话历史中的重要部分，帮助理解大模型决策依据
          </Text>
          
          <Divider style={{ margin: '16px 0' }} />
          
          <Tabs defaultActiveKey="1" type="card">
            <TabPane 
              tab={<span><FireOutlined /> 对话热图</span>}
              key="1"
            >
              <ChatHeatmap 
                history={dialogueHistory} 
                loading={historyLoading} 
                onConfigChange={handleConfigChange}
              />
            </TabPane>
            <TabPane 
              tab={<span><LineChartOutlined /> 权重趋势</span>}
              key="2"
            >
              <WeightTrendChart history={dialogueHistory} loading={historyLoading} />
            </TabPane>
            <TabPane 
              tab={<span><NodeIndexOutlined /> 语义网络</span>}
              key="3"
            >
              <SemanticNetwork 
                history={dialogueHistory} 
                loading={historyLoading} 
              />
            </TabPane>
          </Tabs>
        </Card>
        
        <Card
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Title level={4} style={{ marginTop: 0 }}>热图分析系统说明</Title>
          <Text>
            <ul>
              <li><Text strong>对话热图</Text>：直观展示对话历史中每条消息的重要程度，颜色越深表示权重越高</li>
              <li><Text strong>权重趋势</Text>：展示对话中权重、连贯性、频率等指标随对话进行的变化趋势</li>
              <li><Text strong>语义网络</Text>：可视化展示对话中关键词、实体、主题之间的语义关联关系</li>
            </ul>
          </Text>
          
          <Title level={4}>应用场景</Title>
          <Text>
            <ul>
              <li><Text strong>用户体验提升</Text>：直观理解上下文优先级，增强大模型决策透明度</li>
              <li><Text strong>系统调试与优化</Text>：开发人员可通过热图直观观察权重算法效果</li>
              <li><Text strong>教学与演示</Text>：展示系统核心技术的有力工具，帮助理解多轮对话中的权重计算原理</li>
            </ul>
          </Text>
        </Card>
      </Content>
    </Layout>
  );
} 