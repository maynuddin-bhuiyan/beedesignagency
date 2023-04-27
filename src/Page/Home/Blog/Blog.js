import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "./Blog.css";

const Blog = () => {
  const testimonialData = [
    {
      id: 1,
      img: "https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8zdAA8xm_ueGuH4YOfZQKUJqKtVBlusc8BJd6wpHG8931A-HMyWegsg3dLrgzA9EW9g&usqp=CAU",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLMPhjyDeMoXEMiJUWEY-kABAxoXmOOaaTZR4MPzmUPGt-CR3PzOLW_TFPgMzKy7J-XI&usqp=CAU",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJBFXsOZfyS6-xFeisiOc_Pz3uH-43M7HEpTsbInR2E1CjcV-j8pLXi672WQY8j15F-A&usqp=CAU",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBl_bG2YxDahckBq1HT6ZvFsJ9ugUiBqsUyJwU_6ab15BZhH6s8iRnsU3jQVlF-o-ocTo&usqp=CAU",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgsLo8hJoFhZJD43vu41JTHgbC3YBKU8pEVlPV_e0mzamRlN5IZXXL7UKwUdQHat5UxY&usqp=CAU",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
  ];

  const settings = {
    autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{margin: "100px 0px"}}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: 700,
            fontSize: "45px",
            lineHeight: "60px",
            color: "#00295A",
          }}
        >
          What Our Client's Say
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "50px",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#00295A",
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et
        </Typography>
        {/* Slider Start */}
        <Box>
          <Slider {...settings}>
            {testimonialData?.map((item, index) => (
              <Box key={item?.id} className="sliderContentContainer">
                <Box
                  className="sliderContent"
                  sx={{
                    backgroundColor: "#f1fafd",
                    paddingTop: "22px",
                    paddingBottom: "10px",
                    paddingLeft: "26px",
                    paddingRight: "26px",
                    borderRadius: "15px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, marginBottom: "14px" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%", height: "150px" }}
                      alt="Remy Sharp"
                      src={item.img}
                    ></Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#000D21",
                        marginBottom: "3px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "25px",
                      color: "#707070",
                    }}
                  >
                    {item.review}
                  </Typography>
                  <Button
                    sx={{
                      width: "241px",
                      padding: "10px 20px",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#000000",
                      borderRadius: "40px",
                      border: "2px solid #FD8C1C",
                      marginTop: "10px",
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
