import { FC, ReactNode } from 'react';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import userImage from 'common/assets/images/user.png';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

interface IItemProps {
	title: string;
	to: string;
	icon: ReactNode;
	selected: string;
	setSelected: (title: string) => void;
}

const Item: FC<IItemProps> = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const SideBar: FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important'
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important'
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important'
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important'
				}
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					{/* LOGO AND MENU ICON */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100]
						}}
					>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'
							>
								<Typography variant='h3' color={colors.grey[100]}>
									ADMINIS
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/*USER*/}
						<Box mb='25px' >
							<Box display='flex' justifyContent='center' alignItems='center'>
								<img
									src={userImage}
									alt='profile-user'
									width='100px'
									style={{ cursor: 'pointer', borderRadius: '50%', maxWidth: '70%' }}
								/>
							</Box>
							<Box textAlign='center' sx={{opacity: isCollapsed ? '0' : '1'}}>
								<Typography
									variant='h2'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
									minWidth='max-content'
								>
									Ed Roh
								</Typography>
								<Typography variant='h5' color={colors.greenAccent[500]} minWidth='max-content'>
									VP Fancy Admin
								</Typography>
							</Box>
						</Box>

					{/*MENU ITEMS*/}
					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<Item title='Dashboard' to='/my-dashboard' icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 15px 20px'}}>Data</Typography>
						<Item title='Manage Team' to='/my-dashboard/team' icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Contacts Information' to='/my-dashboard/contacts' icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Invoices Balances' to='/my-dashboard/invoices' icon={<ReceiptOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 15px 20px'}}>Pages</Typography>
						<Item title='Profile Form' to='/my-dashboard/form' icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Calendar' to='/my-dashboard/calendar' icon={<CalendarTodayOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='FAQ Page' to='/my-dashboard/faq' icon={<HelpOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 15px 20px'}}>Charts</Typography>
						<Item title='Bar Chart' to='/my-dashboard/bar' icon={<BarChartOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Pie Chart' to='/my-dashboard/pie' icon={<PieChartOutlinedOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Line Chart' to='/my-dashboard/line' icon={<TimelineOutlinedIcon/>} selected={selected} setSelected={setSelected} />
						<Item title='Geography Chart' to='/my-dashboard/geography' icon={<MapOutlinedIcon/>} selected={selected} setSelected={setSelected} />
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default SideBar;
