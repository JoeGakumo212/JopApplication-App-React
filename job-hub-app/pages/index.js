import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
function Home() {
  return (
    <div>
      <Grid container >
      <Typography gutterBottom variant="h5" component="div" color={"#cc5342"} fontWeight="bold"  mt="2" padding={"20px"}>
          Job Career Hub
          
          </Typography>
        <Grid padding={1} spacing={2} xs={1} sm={2} md={3} lg={3} height={"800px"} width={"100%"}>
         
        <Card sx={{ width:"100%", height:"80%" }}>
        
            <CardContent>
          
              <Typography gutterBottom variant="h5" component="div" color={"#cc5342"} fontWeight="bold"  mt="2" textAlign="center">
          Software  Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
                Discover Software Testing Jobs. Find Quick Results from Multiple Sources.
                Get Software Testing Jobs.
                Get Instant Quality Results
                at Job career Hub Now! Find Related Results Now. Get More Related Info.
                Explore the Best Info Now. Discover Quality Results.
                Powerful and Easy to Use. 100+ Qualitative Results.
                Services: Best Results, Explore Now, New Sources, Best in Search.
              </Typography>
              
              </CardContent>
                  <CardActions>
                    <Link href="/jobsAvailable/moreJobs">
                      <Button size="small">Apply Here</Button>
                    </Link>
              
              </CardActions>
                  </Card>
        </Grid>
        <Grid  padding={1} spacing={2} xs={1} sm={2} md={3} lg={3}  height={"800px"} width={"100%"}>
              <Card sx={{ width:"100%", height:"80%" }}>
                
                <CardContent>
              
                  <Typography gutterBottom variant="h5" component="div" color={"#cc5342"} fontWeight="bold"  >
              Software Developer Jobs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                    Discover Software Testing Jobs. Find Quick Results from Multiple Sources.
                    Get Software Testing Jobs.
                    Get Instant Quality Results
                    at Career Job Hub Now! Find Related Results Now. Get More Related Info.
                    Explore the Best Info Now. Discover Quality Results.
                    Powerful and Easy to Use. 100+ Qualitative Results.
                    Services: Best Results, Explore Now, New Sources, Best in Search.
                  </Typography>
                  
                </CardContent>
                    <CardActions>
                      <Link href="/jobsAvailable/moreJobs">
                        <Button size="small">Apply Here</Button>
                      </Link>
                  
                </CardActions>
                        </Card>

        </Grid>

      <Grid  padding={1} spacing={2}xs={1} sm={2} md={3} lg={3}  height={"800px"} width={"100%"}>
                <Card sx={{ width:"100%", height:"80%" }}>      
                <CardContent>
              
                  <Typography gutterBottom variant="h5" component="div" color={"#cc5342"} fontWeight="bold"  >
              DEvOps Jobs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                    Discover Softwar DevOps Jobs. Find Quick Results from Multiple Sources.
                    Get Software Testing Jobs.
                    Get Instant Quality Results
                    at Career Job Hub Now! Find Related Results Now. Get More Related Info.
                    Explore the Best Info Now. Discover Quality Results.
                    Powerful and Easy to Use. 100+ Qualitative Results.
                    Services: Best Results, Explore Now, New Sources, Best in Search.
                  </Typography>
                  
              </CardContent>
                  <CardActions>
                    <Link href="/jobsAvailable/moreJobs">
                      <Button size="small">Apply Here</Button>
                    </Link>
              
            </CardActions>
            
              </Card>
        </Grid>
       
      </Grid>
      
    </div>
  )
}
export default Home;