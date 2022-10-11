import React from 'react';
import { GithubFilled } from '@ant-design/icons';
import { getAuthor } from '@/components/author';
import './footer.less';

const Footer: React.FC = () => {
  const { user, author, githubUrl, changed } = getAuthor();
  return (
    <footer>
      <div>
        <div>
          <span className="">Made with ❤️</span>
          <span className="author">
            by
            <span
              style={{ marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${author}`);
                }
              }}
            >
              {author}
            </span>
          </span>
          <span className="author">
            💞 Changed by
            <span
              style={{ marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${changed}`);
                }
              }}
            >
              {changed}
            </span>
          </span>
        </div>

        <a
          href={githubUrl}
          style={{ position: 'absolute', right: '8px', fontSize: '12px' }}
          target="_blank"
        >
          <GithubFilled style={{ color: '#fff', marginRight: '4px' }} />{' '}
          项目代码
        </a>
      </div>
    </footer>
  );
};

export default Footer;
