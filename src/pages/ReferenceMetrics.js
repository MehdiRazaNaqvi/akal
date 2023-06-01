import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Badge, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import TimelineIcon from '@mui/icons-material/Timeline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { FederalUsers, TotalFederalSalary, minimumFederalSalary, averageFederalSalary, highestFederalSalary, totalStateSalary } from '../_mock/user';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl" sx={{ mb: 10 }}>

        <Typography variant="h4" sx={{ mb: 5 }}>
          Average Salary of Appointees
        </Typography>

        <Grid container spacing={3}>


          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Average Salary of Appointees"
              subheader="(+15%) than last year"
              chartData={[
                { label: 'DG', value: 5867300 },
                { label: 'MD', value: 6086813 },
                { label: 'Advisor', value: 5304000 },
                { label: 'Secretary', value: 6771500 },
                { label: 'Assistant', value: 4472480 },
                { label: 'Chief', value: 5836333 },
                { label: 'ED', value: 6065000 },
                { label: 'COO', value: 7298333 },
                { label: 'SSA', value: 5892666 },
                { label: 'ES', value: 5530125 },
                { label: 'Commissioner', value: 5644714 }
              ]}
              chartColors={[
                theme.palette.primary.main,
              ]}
            />
          </Grid>


        </Grid>
      </Container>


      <Container maxWidth="xl">

        <Typography variant="h4" sx={{ mb: 5 }}>
          Reference Metrics
        </Typography>


        <Grid container spacing={3}>

          <Grid item xs={12} md={12} lg={12}>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Doctor</Typography>
              </AccordionSummary>
              <AccordionDetails lg={12} >

                <Grid container spacing={3}>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="State Salaries to Salary of Senator"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Sum of Salaries of State', value: totalStateSalary },
                        { label: 'Salary of Senator', value: 18000000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Rep member to State Civil Servant"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of Representative Member', value: 5000000 },
                        { label: 'Salary of state civil servant', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Federal civil servant to minimum wage"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of a federal civil servant', value: 60000 },
                        { label: 'Minimum wage', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>
                </Grid>

              </AccordionDetails>
            </Accordion>

          </Grid>



          <Grid item xs={12} md={12} lg={12}>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>State</Typography>
              </AccordionSummary>
              <AccordionDetails lg={12} >

                <Grid container spacing={3}>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="State Salaries to Salary of Senator"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Sum of Salaries of State', value: totalStateSalary },
                        { label: 'Salary of Senator', value: 18000000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Rep member to State Civil Servant"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of Representative Member', value: 5000000 },
                        { label: 'Salary of state civil servant', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Federal civil servant to minimum wage"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of a federal civil servant', value: 60000 },
                        { label: 'Minimum wage', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>
                </Grid>

              </AccordionDetails>
            </Accordion>

          </Grid>



          <Grid item xs={12} md={12} lg={12}>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Senator</Typography>
              </AccordionSummary>
              <AccordionDetails lg={12} >

                <Grid container spacing={3}>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="State Salaries to Salary of Senator"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Sum of Salaries of State', value: totalStateSalary },
                        { label: 'Salary of Senator', value: 18000000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Rep member to State Civil Servant"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of Representative Member', value: 5000000 },
                        { label: 'Salary of state civil servant', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Federal civil servant to minimum wage"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of a federal civil servant', value: 60000 },
                        { label: 'Minimum wage', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>
                </Grid>

              </AccordionDetails>
            </Accordion>

          </Grid>



          <Grid item xs={12} md={12} lg={12}>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Teacher</Typography>
              </AccordionSummary>
              <AccordionDetails lg={12} >

                <Grid container spacing={3}>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="State Salaries to Salary of Senator"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Sum of Salaries of State', value: totalStateSalary },
                        { label: 'Salary of Senator', value: 18000000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Rep member to State Civil Servant"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of Representative Member', value: 5000000 },
                        { label: 'Salary of state civil servant', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>


                  <Grid item xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                      title="Federal civil servant to minimum wage"
                      type="donut"
                      // subheader="Sum of State to Senator"
                      chartData={[
                        { label: 'Salary of a federal civil servant', value: 60000 },
                        { label: 'Minimum wage', value: 20000 },
                        // { label: 'Europe', value: 1443 },
                        // { label: 'Africa', value: 4443 },
                      ]}
                      chartColors={[
                        theme.palette.primary.main,
                        theme.palette.info.main,
                        theme.palette.warning.main,
                        theme.palette.error.main,
                      ]}
                    />
                  </Grid>
                </Grid>

              </AccordionDetails>
            </Accordion>

          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>

            <AppCurrentVisits
              title="University Professor to Senator"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Salary of University Professor', value: 200000 },
                { label: 'Salary of Senator', value: 18000000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />


          </Grid>



          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="University Professor to Local Govt Chairman"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Salary of University Professor', value: 200000 },
                { label: 'Salary of Local Govt Chairman', value: 5990000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Doctor to Local Govt Councillor"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Salary of Doctor', value: 150000 },
                { label: 'Salary of Local Govt Councillor', value: 5340000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="National debt to Federal Salaries"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Salary of Federal', value: TotalFederalSalary },
                { label: 'National debt', value: 17000000000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Federal Appointee Assistant to University Lecturer"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Federal Appointee Assistant', value: 4213040 },
                { label: 'University Lecturer', value: 200000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>

            <AppCurrentVisits
              title="Federal Appointee DG to Medical Doctor"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Federal Appointee DG', value: 5924633 },
                { label: 'Medical Doctor', value: 150000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Governor to Software Developer"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Governor', value: 11540000 },
                { label: 'Software Developer', value: 250000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Judicial Office Holder to Police Officer"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Judicial Office Holder', value: 4213040 },
                { label: 'Police Officer', value: 85000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="State Salaries to Budget Allocation of State"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'State Salaries', value: totalStateSalary },
                { label: 'Budget Allocation of State', value: 3000000000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Federal Appointees to Nigerian Armed Forces"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Federal Appointees', value: 11540000 },
                { label: 'Nigerian Armed Forces', value: 250000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Cost of National Election to Appointees Salaries"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Cost of National Election', value: 1500000000 },
                { label: 'Appointees Salaries', value: 1151688000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Cost of National Census to State Salaries"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Cost of National Census', value: 2000000000 },
                { label: 'State Salaries', value: totalStateSalary },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>



          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Primary Govt Teacher to Local Govt Chairman"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Primary Govt Teacher', value: 65000 },
                { label: 'Local Govt Chairman', value: 5990000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Senator to Secondary Govt Teacher"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Senator', value: 18000000 },
                { label: 'Secondary Govt Teacher', value: 78000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Federal Civil Servant to Councillor"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Federal Civil Servant', value: 60000 },
                { label: 'Councillor', value: 5340000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Assembly Member to University Professor"
              type="donut"
              // subheader="Sum of State to Senator"
              chartData={[
                { label: 'Assembly Member', value: 60000 },
                { label: 'University Professor', value: 2480000 },

              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.success.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>





          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/akal/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Design' },
                { id: '6', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}


        </Grid >


      </Container >
    </>
  );
}
