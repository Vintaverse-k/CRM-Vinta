import iconData from './iconData';

const sidebarData = {
  main: [
    { name: 'Dashboard', icon: iconData.dashboard, path: '/dashboard' },
    { name: 'My Tasks', icon: iconData.myTasks, path: '/mytask' },
    { name: 'Inbox', icon: iconData.inbox, path: '/inbox' },
    { name: 'Calendar', icon: iconData.calendar, path: '/calendar' },
    { name: 'Reports', icon: iconData.reports, path: '/reports' },
    { name: 'Portfolio', icon: iconData.portfolio, path: '/portfolio' }
  ],
  project: {
    label: 'Project',
    addIcon: iconData.plus,
    items: [
      { name: 'Product Management', dotColor: '#1FC3D8', path: '/product-management' },
      { name: 'Project Management', dotColor: '#7A5CFA', path: '/project-management' },
      { name: 'Netify Real Estate Website', dotColor: '#FD853A', path: '/netify-real-estate-website' },
      { name: 'My First portfolio', icon: iconData.folder, arrow: iconData.downArrow, path: '/my-first-portfolio' }
    ]
  },
  team: {
    label: 'Team',
    addIcon: iconData.plus,
    items: [
      { name: 'All Team', icon: iconData.team, arrow: iconData.downArrow, path: '/all-team' },
      { name: 'Product Team', dotColor: '#7A5CFA', arrow: iconData.downArrow, path: '/product-team' }
    ]
  },
  bottom: [
    { name: 'Invite Team', icon: iconData.invite, path: '/invite-team' },
    { name: 'Supports', icon: iconData.support, path: '/supports' },
    { name: 'Settings', icon: iconData.settings, path: '/settings' }
  ]
};

export default sidebarData;
