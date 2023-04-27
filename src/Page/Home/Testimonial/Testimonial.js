import {
  Avatar,
  Badge,
  Box,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import logo from "../../../Images/AboutUs/Logo.png";
import "./Testimonial.css";
// Import Swiper styles

// import required modules

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
      name: "Rodney Bryner",
      designation: "Customer",
      review:
        "You may start selling in a matter of minutes and easy to use. Appropriate for all devices.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
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

  const SmallAvatar = styled(Avatar)(() => ({
    width: 16,
    height: 16,
    marginLeft: "10px",
  }));

  return (
    <Box>
      <Container>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{ width: "20px", height: "20px" }}
            src={logo}
            alt="logo"
          />
          <Typography sx={{ marginLeft: "13px" }}>TESTIMONIAL</Typography>{" "}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "50px",
            fontWeight: 700,
            fontSize: "45px",
            lineHeight: "60px",
            color: "#00295A",
          }}
        >
          What Our Client's Say
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
                    <Box>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={item.img} />
                        }
                      >
                        <Avatar
                          sx={{ width: "58px", height: "60px" }}
                          alt="Remy Sharp"
                          src={item.img}
                        />
                      </Badge>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "21px",
                          color: "primary.black",
                          marginBottom: "3px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "secondary.main",
                          marginBottom: "4px",
                        }}
                      >
                        {item.designation}
                      </Typography>
                      <Typography>{item.star}</Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "25px",
                      color: "secondary.main",
                    }}
                  >
                    {item.review}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
