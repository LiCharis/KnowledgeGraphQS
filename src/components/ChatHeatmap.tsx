'use client';
import React, { useState, useCallback } from 'react';
import { Skeleton, Card, Tooltip, Typography, Badge, Space, Tag, Empty, Slider } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useTheme } from 'antd-style';

const { Text, Title } = Typography;

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

interface ChatHeatmapProps {
  history: DialogueRecord[];
  loading: boolean;
  onConfigChange?: (config: Config) => void;
}

const ChatHeatmap: React.FC<ChatHeatmapProps> = ({ history, loading, onConfigChange }) => {
  const theme = useTheme();
  const [config, setConfig] = useState<Config>({
    timeWeight: 0.33,
    frequencyWeight: 0.33,
    semanticWeight: 0.34,
    similarityWeight: 0.7,
    timeFactorWeight: 0.3,
  });

  // 更新配置并通知父组件
  const updateConfig = useCallback((newConfig: Partial<Config>) => {
    const updatedConfig = { ...config, ...newConfig };
    setConfig(updatedConfig);
    onConfigChange?.(updatedConfig);
  }, [config, onConfigChange]);

  // 计算颜色强度
  const getHeatColor = (weight: number) => {
    const normalizedWeight = Math.min(Math.max(weight, 0), 1);
    return `rgba(124, 77, 255, ${normalizedWeight})`;
  };

  // 获取关键词标签颜色
  const getKeywordColor = (index: number) => {
    const colors = ['#7C4DFF', '#4386FF', '#00BCD4', '#009688', '#8BC34A', '#CDDC39'];
    return colors[index % colors.length];
  };

  // 添加权重调节控制器
  const WeightAdjuster = () => (
    <Card
      size="small"
      title={
        <Space>
          <Text strong>综合权重配置</Text>
          <Tooltip title="调整对话重要性评分的各个维度权重，这些权重将影响热图的颜色深浅">
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      style={{ marginBottom: 16 }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <div>
          <Text>时间权重: {(config.timeWeight * 100).toFixed(0)}%</Text>
          <Tooltip title="时间权重影响对话的时效性评分，最近的对话会获得更高的权重">
            <Slider
              value={config.timeWeight}
              min={0}
              max={1}
              step={0.01}
              onChange={(value) => {
                const remaining = (1 - value) / 2;
                updateConfig({
                  timeWeight: value,
                  frequencyWeight: remaining,
                  semanticWeight: remaining,
                });
              }}
            />
          </Tooltip>
        </div>
        <div>
          <Text>频率权重: {(config.frequencyWeight * 100).toFixed(0)}%</Text>
          <Tooltip title="频率权重反映关键词在对话中出现的频次，高频词会获得更高的权重">
            <Slider
              value={config.frequencyWeight}
              min={0}
              max={1}
              step={0.01}
              onChange={(value) => {
                const remaining = (1 - value) / 2;
                updateConfig({
                  timeWeight: remaining,
                  frequencyWeight: value,
                  semanticWeight: remaining,
                });
              }}
            />
          </Tooltip>
        </div>
        <div>
          <Text>相关度权重: {(config.semanticWeight * 100).toFixed(0)}%</Text>
          <Tooltip title="相关度权重表示对话内容与当前上下文的语义相关程度">
            <Slider
              value={config.semanticWeight}
              min={0}
              max={1}
              step={0.01}
              onChange={(value) => {
                const remaining = (1 - value) / 2;
                updateConfig({
                  timeWeight: remaining,
                  frequencyWeight: remaining,
                  semanticWeight: value,
                });
              }}
            />
          </Tooltip>
        </div>
      </Space>
    </Card>
  );

  // 添加语义配置调节控制器
  const SemanticAdjuster = () => (
    <Card
      size="small"
      title={
        <Space>
          <Text strong>语义相关度配置</Text>
          <Tooltip title="调整语义相关度计算的参数，这些参数将影响对话内容的语义匹配程度">
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      style={{ marginBottom: 16 }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <div>
          <Text>相似度权重: {(config.similarityWeight * 100).toFixed(0)}%</Text>
          <Tooltip title="相似度权重决定了文本内容的语义相似度在计算中的比重">
            <Slider
              value={config.similarityWeight}
              min={0}
              max={1}
              step={0.01}
              onChange={(value) => {
                updateConfig({
                  similarityWeight: value,
                  timeFactorWeight: 1 - value,
                });
              }}
            />
          </Tooltip>
        </div>
        <div>
          <Text>时间因子权重: {(config.timeFactorWeight * 100).toFixed(0)}%</Text>
          <Tooltip title="时间因子权重影响语义相关度随时间衰减的程度">
            <Slider
              value={config.timeFactorWeight}
              min={0}
              max={1}
              step={0.01}
              onChange={(value) => {
                updateConfig({
                  similarityWeight: 1 - value,
                  timeFactorWeight: value,
                });
              }}
            />
          </Tooltip>
        </div>
      </Space>
    </Card>
  );

  if (loading) {
    return (
      <Card
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        }}
      >
        <Skeleton active paragraph={{ rows: 8 }} />
      </Card>
    );
  }

  if (history.length === 0) {
    return (
      <Card
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '40px 0',
        }}
      >
        <Empty description="暂无对话历史数据" />
      </Card>
    );
  }

  return (
    <Card
      title={
        <Space>
          <Title level={4} style={{ margin: 0 }}>对话历史热图</Title>
          <Tooltip title="热图显示每条对话的重要性权重，可通过调节权重参数自定义计算方式">
            <InfoCircleOutlined style={{ color: theme.colorPrimary }} />
          </Tooltip>
        </Space>
      }
      style={{
        width: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
      }}
    >
      <WeightAdjuster />
      <SemanticAdjuster />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {history.map((record, index) => (
          <Card 
            key={index}
            size="small"
            style={{
              borderLeft: `4px solid ${getHeatColor(record.weight)}`,
              background: `linear-gradient(90deg, ${getHeatColor(record.weight / 3)} 0%, rgba(255, 255, 255, 0) 100%)`,
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <Text strong style={{ fontSize: '14px' }}>问: {record.query}</Text>
              </div>
              <Badge 
                count={`权重: ${(record.weight * 100).toFixed(0)}%`} 
                style={{ 
                  backgroundColor: getHeatColor(record.weight),
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              />
            </div>
            
            <div style={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.65)', marginBottom: '8px' }}>
              <Text type="secondary">答: {record.response.length > 50 ? `${record.response.substring(0, 50)}...` : record.response}</Text>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
              {record.semanticFeature?.keywords.slice(0, 5).map((keyword, kidx) => (
                <Tag key={kidx} color={getKeywordColor(kidx)} style={{ margin: 0 }}>
                  {keyword}
                </Tag>
              ))}
              
              {record.semanticFeature?.entities?.length > 0 && (
                <Tooltip title={`实体: ${record.semanticFeature?.entities.join(', ')}`}>
                  <Tag color="blue">实体: {record.semanticFeature?.entities.length}</Tag>
                </Tooltip>
              )}
              
              <Tooltip title={`连贯性分数: ${(record.semanticFeature?.coherenceScore * 100).toFixed(0)}%`}>
                <Tag color="green">连贯性: {(record.semanticFeature?.coherenceScore * 100).toFixed(0)}%</Tag>
              </Tooltip>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default ChatHeatmap; 