import { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../common/data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../common/components/header/Header';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';

const Team: FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns: any = [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell'
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left'
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1
		},
		{
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params: GridRenderCellParams) => {
				return (
					<Box
						width='60%'
						m='0 auto'
						p='5px'
						display='flex'
						justifyContent='center'
						bgcolor={
							params.row.access === 'admin'
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius='4px'
					>
						{params.row.access === 'admin' && (
							<AdminPanelSettingsOutlinedIcon />
						)}
						{params.row.access === 'manager' && <SecurityOutlinedIcon />}
						{params.row.access === 'user' && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{params.row.access}
						</Typography>
					</Box>
				);
			}
		}
	];

	return (
		<Box m='20px'>
			<Header title='TEAM' subtitle='Managing the Team Members' />
			<Box m='40px 0 0 0' height='75vh' sx={{
				'& .MuiDataGrid-root': {
					border: 'none'
				},
				'& .MuiDataGrid-cell': {
					borderBottom: 'none'
				},
				'& .name-column--cell': {
					color: colors.greenAccent[300]
				},
				'& .MuiDataGrid-columnHeaders': {
					backgroundColor: colors.blueAccent[700],
					borderBottom: 'none'
				},
				'& .MuiDataGrid-virtualScroller': {
					backgroundColor: colors.primary[400]
				},
				'& .MuiDataGrid-footerContainer': {
					borderTop: 'none',
					backgroundColor: colors.blueAccent[700],
					borderRadius: ' 0 0 4px 4px',
				}
			}}>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};

export default Team;
