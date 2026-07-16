import { Link, useParams } from 'react-router-dom';
import Cover from '../../components/ui/Cover';
import Avatar from '../../components/ui/Avatar';
import Icon from '../../components/ui/Icon';
import { posts, reviews } from '../../data/mock';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id) ?? posts[0];

  return (
    <div className="page container post-detail">
      <Link to="/community" className="text-faint" style={{ display: 'inline-block', margin: '24px 0 16px' }}>
        ← 返回社区
      </Link>

      <Cover seed={post.cover} height={320} radius="var(--radius-lg)" />

      <div className="post-detail-body">
        <span className="pill-tag">{post.type}</span>
        <h1 className="post-detail-title">{post.title}</h1>

        <div className="post-detail-author">
          <Avatar seed={post.avatar} name={post.author} size={40} />
          <div>
            <div style={{ fontWeight: 700 }}>{post.author}</div>
            <div className="text-faint" style={{ fontSize: 12.5 }}>{post.date}</div>
          </div>
          <button className="btn btn-outline" style={{ marginLeft: 'auto', padding: '8px 18px' }}>关注</button>
        </div>

        <div className="post-detail-content text-soft">
          <p>{post.excerpt}</p>
          <p>
            这一次的行程比想象中更慢一些——没有赶景点，而是跟着当地地陪的节奏，走进巷子里的小店，
            听他讲这座城市不为人知的故事。旅行最打动人的部分，往往不是攻略上写好的那些地方，
            而是这种被本地人带着走的、没有计划的松弛感。
          </p>
          <p>
            如果你也想找一个当地人带你逛逛，可以在途游上直接预约地陪，
            或者发布一条悬赏，让感兴趣的向导主动联系你。
          </p>
        </div>

        <div className="post-detail-tags">
          {post.tags.map((t) => <span key={t} className="pill-tag">#{t}</span>)}
        </div>

        <div className="post-detail-actions">
          <button className="btn btn-outline"><Icon name="heart" size={16} /> {post.likes}</button>
          <button className="btn btn-outline"><Icon name="message" size={16} /> {post.comments}</button>
          <button className="btn btn-outline"><Icon name="share" size={16} /> 分享</button>
        </div>

        <div className="post-detail-comments">
          <h3 style={{ marginBottom: 16 }}>评论 {reviews.length}</h3>
          {reviews.map((r) => (
            <div key={r.id} className="post-comment">
              <Avatar seed={r.avatar} name={r.author} size={32} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{r.author}</div>
                <p className="text-soft" style={{ fontSize: 13.5 }}>{r.content}</p>
                <span className="text-faint" style={{ fontSize: 12 }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
