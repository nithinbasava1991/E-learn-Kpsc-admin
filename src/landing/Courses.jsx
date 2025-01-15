import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import user1 from '../assets/images/u2.jpg';
import user2 from '../assets/images/u3.jpg';
import user3 from '../assets/images/u4.jpg';
import { Box } from '@mui/system';

const AllCourses = [
  {
    img: user1,
    title: 'Class I & Class II Officers',
    siteLink: 'class1'
  },
  {
    img: user2,
    title: 'Class III Officers'
  },
  {
    img: user3,
    title: 'Posts for II PUC Pass Candidates'
  }
];

const Courses = () => {
  return (
    <>
      <Typography
      variant='h3'
          sx={{
            textTransform: "uppercase",
            color: "black",
            textAlign: {md:"start",xs:'center'},
            pl:{md:' 50px',xs:'0px'},
            fontWeight:400
          }}
        >
         Courses
        </Typography>
    <Grid container spacing={4} sx={{ padding: 3 ,mt:{md:-4}}}>
      {AllCourses.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {/* Wrap the card with a Link if siteLink exists */}
          {blog.siteLink ? (
            <Link
              to={blog.siteLink} // This will use react-router-dom to navigate
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: '100%',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={blog.img}
                  alt={blog.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px'
                  }}
                />
                <CardContent
                  sx={{
                    padding: '20px',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: '#333'
                    }}
                  >
                    {blog.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card
              variant="outlined"
              sx={{
                width: '100%',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                image={blog.img}
                alt={blog.title}
                sx={{
                  width: '100%',
                  height: { xs: 280, md: 200, lg: 250 },
                  objectFit: 'cover',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px'
                }}
              />
              <CardContent
                sx={{
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: '#333'
                  }}
                >
                  {blog.title}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Courses;
