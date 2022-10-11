import { useStaticQuery, graphql } from 'gatsby';
import { getSearchObj } from '@/helpers/location';

export function getAuthor() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          githubUrl
          author
          changed
          contact
        }
      }
    }
  `);
  const { author, changed, contact, githubUrl } = data.site.siteMetadata;
  const user = getSearchObj().user || changed;
  return { user, author, changed, contact, githubUrl };
}
export { getSearchObj };
