import Slugs from '../../../components/pages/Slugs';
import { getSlugConfig, getSlugsPaths } from '../../../utils/components';
export default Slugs;


export function getStaticProps({ params }) {
  let componentConfig = getSlugConfig(params) || {};
  return {
    props: { componentConfig }
  };
}

export function getStaticPaths(){
  const paths = getSlugsPaths();
  return {
    fallback: false,
    paths,
  };
}
