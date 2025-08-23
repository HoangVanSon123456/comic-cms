import { InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import { BLACK, ORANGE, WHITE } from "@/components/helper/color";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Header({
  toggleMode,
  mode,
}: {
  toggleMode: () => void;
  mode: "light" | "dark";
}) {
  console.log(toggleMode, "toggleMode");
  return (
    <div className="flex w-full items-center justify-center gap-5">
      <div className="flex items-center py-2.5">
        <Image
          src="https://st.truyenqqgo.com/template/frontend/images/logo-icon.png"
          alt="TruyenQQ"
          width={40}
          height={40}
          unoptimized
        />
        <Typography sx={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
          truyen
        </Typography>
        <Typography
          sx={{
            color: "orange",
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          qq
        </Typography>
      </div>

      {mode === "dark" ? (
        <div className="rounded-full border border-white flex items-center justify-center">
          <IconButton sx={{ color: WHITE }} onClick={toggleMode}>
            <LightbulbOutlinedIcon />
          </IconButton>
        </div>
      ) : (
        <div className="rounded-full border border-amber-500 flex items-center justify-center">
          <IconButton sx={{ color: ORANGE }} onClick={toggleMode}>
            <NightlightOutlinedIcon />
          </IconButton>
        </div>
      )}
      <TextField
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25rem" }}
        slotProps={{
          input: {
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          },
        }}
      />
      <div className="rounded-full flex items-center justify-center ml-100">
        <IconButton sx={{ color: WHITE }}>
          <NotificationsIcon sx={{ color: mode === "dark" ? WHITE : ORANGE }} />
        </IconButton>
      </div>
    </div>
  );
}
