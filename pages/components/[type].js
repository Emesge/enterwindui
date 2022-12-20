import Type from '../../components/pages/Type';
import { getTypeConfig, getTypePaths } from '../../utils/components';
export default Type;

export function getStaticProps({ params }) {
  const componentConfig = getTypeConfig(params);
  return {
    props: { componentConfig }
  };
}

export function getStaticPaths(){
  const types = getTypePaths();
  return {
    fallback: false,
    paths: types,
  };
}
