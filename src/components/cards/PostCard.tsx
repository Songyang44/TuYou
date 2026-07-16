import { Link } from 'react-router-dom';
import Cover from '../ui/Cover';
import Avatar from '../ui/Avatar';
import Icon from '../ui/Icon';
import type { Post } from '../../types';
import './PostCard.css';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/community/${post.id}`} className="post-card card-surface">
      <Cover seed={post.cover} height={150} radius="0">
        <span className="pill-tag post-card-type">{post.type}</span>
      </Cover>
      <div className="post-card-body">
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt text-soft">{post.excerpt}</p>
        <div className="post-card-tags">
          {post.tags.map((t) => <span key={t} className="pill-tag">#{t}</span>)}
        </div>
        <div className="post-card-footer">
          <div className="post-card-author">
            <Avatar seed={post.avatar} name={post.author} size={24} />
            <span className="text-soft">{post.author}</span>
          </div>
          <div className="post-card-stats text-faint">
            <span><Icon name="heart" size={13} /> {post.likes}</span>
            <span><Icon name="message" size={13} /> {post.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
