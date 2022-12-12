import Type from '../../components/pages/Type';
import { getTypePaths } from '../../utils/components';
export default Type;


export function getStaticProps() {
  return {
    props: {  }
  };
}

export function getStaticPaths(){
  const types = getTypePaths();
  return {
    fallback: false,
    paths: types,
  };
}
