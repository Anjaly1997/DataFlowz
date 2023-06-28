import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Profile() {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: "200" }}>
        <Grid item md={4}>
          <Grid container spacing={2} sx={{ mt: "20" }}>
            <Grid item md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="left">
                    Anjaly Soman
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Stack direction="row" spacing={2}>
                    <div>
                      <EmailIcon sx={{ m: 2 }} />
                    </div>
                    <div>
                      <p>anjalysoman97@gmail.com</p>
                    </div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" spacing={2}>
                    <div>
                      <SmartphoneIcon sx={{ m: 2 }} />
                    </div>
                    <div>
                      <p>(+49) 17647081362</p>
                    </div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" spacing={2}>
                    <div>
                      <LocationOnIcon sx={{ m: 2 }} />
                    </div>
                    <div>
                      <p>anjalydev.com</p>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={2} sx={{ mt: "200" }}>
            <Grid item md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="left">
                    About me
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate
                    numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam.
                  </Typography>
                  <Typography variant="h6" align="left" sx={{ mt: "30px" }}>
                    Details
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Box sx={{ m: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle2" sx={{ width: "140px" }}>
                        Full Name:
                      </Typography>
                      <Typography variant="body2">Anjaly Anjaly</Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ m: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle2" sx={{ width: "140px" }}>
                        Father's Name:
                      </Typography>
                      <Typography variant="body2">
                        P R Soman
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ m: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle2" sx={{ width: "140px" }}>
                        Address:
                      </Typography>
                      <Typography variant="body2">Kerala, India</Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ m: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle2" sx={{ width: "140px" }}>
                        Zip Code:
                      </Typography>
                      <Typography variant="body2">685537</Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ m: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle2" sx={{ width: "140px" }}>
                        Website:
                      </Typography>
                      <Typography variant="body2">
                        https://anjalydev.com
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box height={20} />
    </>
  );
}
