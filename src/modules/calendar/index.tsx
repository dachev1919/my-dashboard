import { FC, useState } from 'react';
import FullCalendar, { EventApi, formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme
} from '@mui/material';
import Header from 'common/components/header/Header';
import { tokens } from 'theme';

const Calendar: FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>();
	const handleDateClick = (selected: any) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				// @ts-ignore
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay
			});
		}
	};

	const handleEventClick = (selected: any) => {
		if (
			window.confirm(
				`Are you sure want to delete the event '${selected.event.title}'?`
			)
		) {
			selected.event.remove();
		}
	};

	return (
		<Box m='20px'>
			<Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />

			<Box display='flex' justifyContent='space-between'>
				{/*CALENDAR SIDEBAR*/}
				<Box
					flex='1 1 20%'
					bgcolor={colors.primary[400]}
					p='15px'
					borderRadius='4px'
				>
					<Typography variant='h5'>Events</Typography>
					<List>
						{currentEvents &&
							currentEvents.map((event: EventApi) => (
								<ListItem
									key={event.id}
									sx={{
										backgroundColor: colors.greenAccent[500],
										margin: '10px 0',
										borderRadius: '2px'
									}}
								>
									<ListItemText
										primary={event.title}
										secondary={
											<Typography>
												{event.start &&
													formatDate(event.start, {
														year: 'numeric',
														month: 'short',
														day: 'numeric'
													})}
											</Typography>
										}
									></ListItemText>
								</ListItem>
							))}
					</List>
				</Box>

				{/*CALENDAR*/}
				<Box flex='1 1 100%' ml='15px'>
					<FullCalendar
						height='75vh'
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin
						]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
						}}
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={events => setCurrentEvents(events)}
						initialEvents={[
							{id: '1234', title: 'All-day event', date: '2023-03-08'},
							{id: '5678', title: 'Timed event', date: '2023-03-14'},
						]}
					></FullCalendar>
				</Box>
			</Box>
		</Box>
	);
};

export default Calendar;
