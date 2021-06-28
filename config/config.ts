import { defineConfig } from 'umi';
import routes from './route.config';
import theme from './theme.config';

export default defineConfig({
  title: '华西公用',
  favicon: 'https://cdnhyt.cd120.com/static/images/icon64.png',
  theme,
  routes,
  dva: {},
  antd: {},
  esbuild: {},
  define: {
    APP_ENV: 'local',
    API_BASE: '',
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
