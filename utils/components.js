import fs from 'fs';
import { join } from 'path';

const typeDirectory = join(process.cwd(), '/data/components');
const slugDirectory = (type) => join(process.cwd(), `/data/components/${type}`);
const slugFiles = (type, slug) => join(process.cwd(), `/data/components/${type}/${slug}.json`);
const typeFiles = (type) => join(process.cwd(), `/data/components/${type}/index.json`);

export const getComponentType = () => {
  return fs.readdirSync(typeDirectory);
};

export const getComponentSlugPathByType = (type = 'atoms') => {
  const dirPath =  slugDirectory(type);
  const dirs = fs.readdirSync(dirPath).reduce((res, dir) => {
    res.push(dir.replace(/\.json$/, '').toString());
    return res;
  }, []);
  return dirs;
};

export const getSlugConfig =  ({ type, slugs }) => {
  try {
    const filePath = slugFiles(type, slugs);
    const fileRaw = fs.readFileSync(filePath);
    const config = JSON.parse(fileRaw);
    return config;
  } catch(err) {
    return false;
  }
};

export const getTypeConfig = ({ type }) => {
  try {
    const filePath = typeFiles(type);
    const fileRaw = fs.readFileSync(filePath);
    const config = JSON.parse(fileRaw);
    return config;
  } catch(err) {
    return false;
  }
};

export const getSlugsPaths = () => {
  const types = getComponentType();
  const paths = [];
  types.forEach(type => {
    getComponentSlugPathByType(type).forEach(slugs => {
      if(slugs !== 'index'){
        paths.push({
          params: {
            slugs,
            type,
          }
        });
      }
    });
  });
  types.map(type => getComponentSlugPathByType(type));

  return paths;
};

export const getTypePaths = () => {
  const types = getComponentType();
  const paths = types.reduce((res, type) => {
    res.push({ params: { type } });
    return res;
  }, []);
  return paths;
};
