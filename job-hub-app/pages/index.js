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
      <Grid container>
      <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Software Testing Jobs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Discover Software Testing Jobs. Find Quick Results from Multiple Sources. Get Software Testing Jobs. Get Instant Quality Results at iZito Now! Find Related Results Now. Get More Related Info. Explore the Best Info Now. Discover Quality Results. Powerful and Easy to Use. 100+ Qualitative Results. Services: Best Results, Explore Now, New Sources, Best in Search.
        </Typography>
      </CardContent>
          <CardActions>
            <Link href="jobsAvailable">
              <Button size="small">Apply Here</Button>
            </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
      </Grid>
    </div>
  )
}
export default Home;