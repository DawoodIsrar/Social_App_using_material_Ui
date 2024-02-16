import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const StyleModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const UserBox = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: 30,
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={"white"}
          color={"black"}
          p={3}
          borderRadius={5}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"grey"}
            textAlign={"center"}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              onClick={(e) => {
                setOpen(true);
              }}
              sx={{ width: 30, height: 30 }}
              src="https://picsum.photos/200/300"
            ></Avatar>
            <Typography component={"p"} sx={{ color: "grey" }}>
              Dawood Israr
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label="Post"
            rows={4}
            placeholder="Whats on your mind"
            variant="standard"
          />
          <Stack direction={"row"} spacing={2} pt={2} pb={3}>
            <EmojiEmotionsIcon sx={{ color: "lightblue" }}></EmojiEmotionsIcon>
            <CollectionsIcon sx={{ color: "purple" }} />
            <VideocamIcon sx={{ color: "green" }} />
            <PersonAddIcon sx={{ color: "red" }} />
          </Stack>
          <ButtonGroup
            width={"100%"}
            pt={2}
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
