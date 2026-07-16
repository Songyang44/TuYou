import { useState } from 'react';
import Avatar from '../../components/ui/Avatar';
import Icon from '../../components/ui/Icon';
import { messages } from '../../data/mock';
import './Messages.css';

interface Bubble {
  id: number;
  from: 'me' | 'them';
  text: string;
  time: string;
}

const threadFor = (name: string): Bubble[] => [
  { id: 1, from: 'them', text: `你好！我是${name}，很高兴为你提供服务～`, time: '09:02' },
  { id: 2, from: 'me', text: '你好，我们计划下周三到达，想请你安排一天的行程。', time: '09:05' },
  { id: 3, from: 'them', text: '没问题，我先给你发一份初步行程，你看看时间是否合适。', time: '09:07' },
  { id: 4, from: 'them', text: '📍 行程卡片：浅草寺 → 隅田川 → 本地居酒屋晚餐', time: '09:08' },
  { id: 5, from: 'me', text: '好的，明天九点在酒店门口见～', time: '10:24' },
];

export default function Messages() {
  const [activeId, setActiveId] = useState(messages[0].id);
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);
  const [draft, setDraft] = useState('');
  const active = messages.find((m) => m.id === activeId) ?? messages[0];
  const [bubbles, setBubbles] = useState<Bubble[]>(threadFor(active.name));

  const selectConversation = (id: string) => {
    setActiveId(id);
    const found = messages.find((m) => m.id === id) ?? messages[0];
    setBubbles(threadFor(found.name));
    setShowChatOnMobile(true);
  };

  const send = () => {
    if (!draft.trim()) return;
    setBubbles((b) => [...b, { id: b.length + 1, from: 'me', text: draft, time: '刚刚' }]);
    setDraft('');
  };

  return (
    <div className="messages-page page">
      <div className={`conversation-list ${showChatOnMobile ? 'hide-on-mobile' : ''}`}>
        <div className="conversation-list-head">
          <h2>消息</h2>
        </div>
        {messages.map((m) => (
          <button
            key={m.id}
            className={`conversation-item ${activeId === m.id ? 'is-active' : ''}`}
            onClick={() => selectConversation(m.id)}
          >
            <Avatar seed={m.avatar} name={m.name} size={44} />
            <div className="conversation-item-body">
              <div className="conversation-item-top">
                <span className="conversation-item-name">{m.name}</span>
                <span className="text-faint">{m.time}</span>
              </div>
              <div className="text-faint conversation-item-preview">{m.lastMessage}</div>
            </div>
            {m.unread > 0 && <span className="conversation-unread">{m.unread}</span>}
          </button>
        ))}
      </div>

      <div className={`chat-panel ${showChatOnMobile ? '' : 'hide-on-mobile'}`}>
        <div className="chat-panel-head">
          <button className="icon-btn mobile-only" onClick={() => setShowChatOnMobile(false)}>
            <Icon name="chevronRight" size={18} strokeWidth={2} />
          </button>
          <Avatar seed={active.avatar} name={active.name} size={36} />
          <div style={{ fontWeight: 700 }}>{active.name}</div>
        </div>

        <div className="chat-panel-body">
          {bubbles.map((b) => (
            <div key={b.id} className={`chat-bubble-row ${b.from === 'me' ? 'is-me' : ''}`}>
              <div className="chat-bubble">
                {b.text}
                <span className="chat-bubble-time">{b.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-quick-replies">
          {['好的，没问题', '请稍等', '可以发一下地图吗', '谢谢！'].map((q) => (
            <button key={q} className="pill-tag" onClick={() => setDraft(q)}>{q}</button>
          ))}
        </div>

        <div className="chat-input-bar">
          <button className="icon-btn"><Icon name="camera" size={18} /></button>
          <button className="icon-btn"><Icon name="location" size={18} /></button>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="输入消息..."
          />
          <button className="btn btn-primary chat-send-btn" onClick={send}>
            <Icon name="send" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
