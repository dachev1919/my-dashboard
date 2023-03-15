import { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { tokens } from 'theme';
import { mockDataInvoices } from 'common/data/mockData';
import Header from 'common/components/header/Header';

const Invoices: FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns: any = [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell'
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
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => {
				<Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>;
			}
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1
		},
	];

	return (
		<Box m='20px'>
			<Header
				title='INVOICES'
				subtitle='List of Invoice balances'
			/>
			<Box
				m='40px 0 0 0'
				height='75vh'
				sx={{
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
						borderRadius: ' 0 0 4px 4px'
					},
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`
          }
				}}
			>
				<DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
			</Box>
		</Box>
	);
};

export default Invoices;
