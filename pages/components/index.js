import Components from '../../components/pages/Components';
import { getTypeConfig, getTypePaths } from '../../utils/components';
export default Components;

export function getStaticProps() {
  const typeList = getTypePaths();
  const componentConfig = [];
  typeList.forEach(item => {
    const { params } = item;
    const { type } = params;
    if(type){
      const config =  getTypeConfig({ type });
      if(config){
        componentConfig.push(config);
      }
    }
  });
  return {
    props: { componentConfig }
  };
}
