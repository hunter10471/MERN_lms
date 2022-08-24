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

