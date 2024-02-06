import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import "./main.css";
import MainRight from "./mainRight";
// import { Card } from "@mui/material";
// import { Link } from "react-router-dom";
// import { FmdGood, Work } from "@mui/icons-material";
const Main = () => {
  // const [jobs, setJobs] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await api.fetch();
  //       setJobs(data.data);
  //       console.log(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  return (
    <>
      {/* {jobs.map((item) => ( */}
      {/* <List
          key={item.job_id}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <Card sx={{ width: "400px", "margin-bottom": "1.2rem" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.employer_name} src={item?.employer_logo} />
              </ListItemAvatar>
              <ListItemText
                primary={item.job_title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline", mb: "1.2rem" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.employer_name}
                    </Typography>{" "}
                    <br />
                    <br />
                    <FmdGood className="text-black" sx={{ fontSize: "22px" }} />
                    <span className="mr-10">{item.job_state}</span>
                    <Work
                      className="text-black"
                      sx={{ fontSize: "22px", mr: "4px" }}
                    />
                    <span>{item.job_employment_type}</span>
                  </React.Fragment>
                }
              />
              <Link
                to={item.job_google_link}
                className="text-blue-600"
                target="_blanket"
              >
                Lear More
              </Link>
              </ListItem>
              </Card>
            </List> */}
      {/* ))} */}
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          gap: "10px",
          margin: "40px 0",
          flex: 'wrap',
          justifyContent: 'center',
    
        }}
        className="container w-full"
      >
        <Box  className="border border-slate-900 w-[40%] overflow-y-auto overflow-x-hidden p-3 ml-[20px] hidden  md:block hidden  sm:block ">
          <List
            sx={{ width: "100%", maxWidth: 420, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider
              variant="fullWidth"
              component="li"
              sx={{ margin: "5px" }}
            />

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider
              variant="fullWidth"
              component="li"
              sx={{ margin: "5px" }}
            />

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box className="w-[70%] mr-10 [sm:mr-0]">
          <MainRight />
        </Box>
      </div>
    </>
  );
};

export default Main;
