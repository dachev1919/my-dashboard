import { FC } from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from 'common/components/header/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from 'theme';

const Faq: FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently Asked Questions Page' />

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
						corporis dicta eligendi enim esse et ex expedita maxime nemo neque
						nesciunt quam quas qui ratione recusandae, rem voluptatem. Amet,
						ipsa?
					</Typography>
				</AccordionDetails>
			</Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            corporis dicta eligendi enim esse et ex expedita maxime nemo neque
            nesciunt quam quas qui ratione recusandae, rem voluptatem. Amet,
            ipsa?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Your favourite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            corporis dicta eligendi enim esse et ex expedita maxime nemo neque
            nesciunt quam quas qui ratione recusandae, rem voluptatem. Amet,
            ipsa?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Some random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            corporis dicta eligendi enim esse et ex expedita maxime nemo neque
            nesciunt quam quas qui ratione recusandae, rem voluptatem. Amet,
            ipsa?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            The final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            corporis dicta eligendi enim esse et ex expedita maxime nemo neque
            nesciunt quam quas qui ratione recusandae, rem voluptatem. Amet,
            ipsa?
          </Typography>
        </AccordionDetails>
      </Accordion>
		</Box>
	);
};

export default Faq;
