// component
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/akal/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/akal/app',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'Federal',
    path: '/akal/app',
    icon: <AssuredWorkloadIcon />,
  },

  // {
  //   title: 'State',
  //   path: '/akal/state',
  //   icon: icon('ic_user'),
  // },

  // {
  //   title: 'Metrics',
  //   path: '/akal/metrics',
  //   icon: icon('ic_analytics'),
  // },


  {
    title: 'product',
    path: '/akal/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/akal/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/akal/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/akal/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
