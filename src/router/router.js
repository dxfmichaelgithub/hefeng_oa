import Main from '@/views/layout/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () =>
    import ('@/views/auth/Login.vue')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () =>
    import ('@/views/error-page/404.vue')
};

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () =>
    import ('@/views/error-page/403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () =>
    import ('@/views/error-page/500.vue')
};

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () =>
    import ('@/views/other/LockingPage.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/login',
  component: Main,
  children: [{
      path: 'home',
      title: { i18n: 'home' },
      name: 'home_index',
      component: () =>
        import ('@/views/home/Home.vue')
    },
    {
      path: 'ownspace',
      title: '个人中心',
      name: 'ownspace_index',
      component: () =>
        import ('@/views/own-space/OwnSpace.vue')
    },
    {
      path: 'message',
      title: '消息中心',
      name: 'message_index',
      component: () =>
        import ('@/views/message/Message.vue')
    }
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
    path: '/inbound',
    icon: 'log-in',
    name: 'inbound',
    title: '入库管理',
    component: Main,
    children: [{
        path: 'new-bill',
        name: 'new-bill',
        title: '创建入库单',
      },
      {
        path: 'check-in',
        name: 'check-in',
        title: '收货',
      },
      {
        path: 'quality-control',
        name: 'quality-control',
        title: '质检',
      },
      {
        path: 'put-away',
        name: 'put-away',
        title: '上架',
      }
    ]
  },
  {
    path: '/inventory',
    icon: 'cube',
    name: 'inventory',
    title: '库存管理',
    component: Main,
    children: [{
        path: 'new-transfer-bill',
        name: 'new-transfer-bill',
        title: '创建移库单',
      },
      {
        path: 'new-count-bill',
        name: 'new-count-bill',
        title: '创建盘点单',
      },
      {
        path: 'transfer-work',
        name: 'transfer-work',
        title: '移库作业',
      },
      {
        path: 'count-work',
        name: 'count-work',
        title: '盘点作业',
      }
    ]
  },
  {
    path: '/outbound',
    icon: 'log-out',
    name: 'outbound',
    title: '出库管理',
    component: Main,
    children: [{
        path: 'new-bill',
        name: 'new-bill',
        title: '创建出库单',
      },
      {
        path: 'outbound-work',
        name: 'outbound-work',
        title: '出库作业',
      },
    ]
  },
  {
    path: '/base-settings',
    icon: 'ios-settings-strong',
    name: 'base-settings',
    title: '基础设置',
    component: Main,
    children: [{
        path: 'warehouse',
        name: 'warehouse',
        title: '仓库',
      },
      {
        path: 'area',
        name: 'area',
        title: '库区',
      },
      {
        path: 'location',
        name: 'location',
        title: '库位',
      },
      {
        path: 'container',
        name: 'container',
        title: '容器',
      },
      {
        path: 'material',
        name: 'material',
        title: '物料',
      },
      {
        path: 'workflow',
        name: 'workflow',
        title: '工作流程',
      }
    ]
  },
  {
    path: '/business-rules',
    icon: 'android-checkbox-outline',
    name: 'business-rule',
    title: '业务规则',
    component: Main,
    children: [{
        path: 'shelves',
        name: 'shelves',
        title: '上架规则',
      },
      {
        path: 'distribution',
        name: 'distribution',
        title: '分配规则',
      },
      {
        path: 'waves',
        name: 'waves',
        title: '波次规则',
      }
    ]
  },
  {
    path: '/statistics-reports',
    icon: 'ios-paper',
    name: 'statistics-reports',
    title: '统计报表',
    component: Main,
    children: [{
        path: 'bills',
        name: 'bills',
        title: '出入库流水',
      },
      {
        path: 'location-state',
        name: 'location-state',
        title: '库位状态查询',
      },
      {
        path: 'location-info',
        title: '库位信息查询',
        name: 'location-info',
      }
    ]
  },
  {
    path: '/system-settings',
    icon: 'android-settings',
    name: 'system-settings',
    title: '系统设置',
    component: Main,
    children: [{
        path: 'users',
        title: '用户',
        name: 'users',
      },
      {
        path: 'user-groups',
        name: 'user-groups',
        title: '用户组',
      },
      {
        path: 'data-backup-recovery',
        name: 'data-backup-recovery',
        title: '数据备份恢复',
      }
    ]
  }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  locking,
  page500,
  page403,
  page404,
  ...appRouter,
];