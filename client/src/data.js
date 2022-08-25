import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GradingIcon from '@mui/icons-material/Grading';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GradeIcon from '@mui/icons-material/Grade';

export const sidebarData = [
  {
    title: 'overview',
    icon: <DonutSmallIcon />,
  },
  {
    title: 'classes',
    icon: <HistoryEduIcon />,
  },
  {
    title: 'messages',
    icon: <MailOutlineIcon />,
  },
  {
    title: 'courses',
    icon: <LibraryBooksIcon />,
  },
  {
    title: 'transcripts',
    icon: <GradingIcon />,
  },
  {
    title: 'settings',
    icon: <SettingsIcon />,
  },
];

export const countCardData = [
  {
    title: 'enrolled courses',
    value: 23,
    color: '#FB923C',
    icon: <AutorenewIcon fontSize='small' />,
  },
  {
    title: 'ongoing courses',
    value: 12,
    color: '#EAB308',
    icon: <TrendingUpIcon fontSize='small' />,
  },
  {
    title: 'completed courses',
    value: 42,
    color: '#A3E635',
    icon: <CheckCircleOutlineIcon fontSize='small' />,
  },
  {
    title: 'grades',
    value: 3.8,
    color: '#A78BFA',
    icon: <GradeIcon fontSize='small' />,
  },
];

export const tableData = [
  {
    title: 'UI/UX',
    lessons: '10/12',
    duration: '10h',
    instructor: 'Mr.John',
    img2: 'https://img.freepik.com/free-vector/prototyping-process-concept-illustration_114360-2741.jpg?w=826&t=st=1661285418~exp=1661286018~hmac=664386ac468716cf1e5fa58fae481e83c74669b8f736d60bce08ff744d4458ab',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Web Development',
    lessons: '08/16',
    duration: '20h',
    instructor: 'Dr.Smith',
    img2: 'https://img.freepik.com/premium-vector/mobile-app-icon-3d-colored-illustration-from-creative-package-collection-creative-mobile-app-icon-web-design-templates-infographics-more_676904-83.jpg?w=826',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Data Structures & Algorithms',
    lessons: '13/24',
    duration: '08h',
    instructor: 'Ms.Smith',
    img2: 'https://img.freepik.com/premium-vector/concept-big-data-processing-energy-station-future-server-room-rack-data-center-isometric-illustration_126283-2079.jpg?w=1060',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Theory Of Programming Languages',
    lessons: '11/15',
    duration: '17h',
    instructor: 'Mr.John',
    img2: 'https://cdn-icons-png.flaticon.com/512/627/627466.png?w=826&t=st=1661285506~exp=1661286106~hmac=c1bd8338db73babd07a835b07591173b9430913243dcef7c0cc1f0872d4d1b1c',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];



export const recommendData = [
  {
    title: 'Full-Stack Development',
    tag: ['HTML', 'CSS', 'JS'],
    img: 'https://img.freepik.com/premium-vector/program-construction-coding-development-software-conceept_133260-2634.jpg?w=826',
    lessons: 10,
    duration: 20,
    color: '#ffcdd2',
  },
  {
    title: 'UI/UX',
    tag: ['Design', 'Figma'],
    img: 'https://img.freepik.com/free-vector/ui-ux-app-development-concept_52683-48848.jpg?w=1380&t=st=1661292328~exp=1661292928~hmac=e0303508bbc9c265191b6a62140759dca12687dffa0c4a99c3f1c805e00fd47c',
    lessons: 10,
    duration: 20,
    color: '#c8e6c9',
  },
  {
    title: 'DBMS',
    tag: ['Database', 'SQL'],
    img: 'https://img.freepik.com/free-vector/data-network-illustration_24908-57878.jpg?w=826&t=st=1661431571~exp=1661432171~hmac=240fedac83f2ab63a74cc8ead6063ebccccaa045567f15abc581d6dfaaf0b6ff',
    lessons: 10,
    duration: 20,
    color: '#c5cae9',
  },
];
