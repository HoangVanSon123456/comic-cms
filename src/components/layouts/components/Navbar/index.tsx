import { AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ORANGE } from "@/components/helper/color";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string>("");
  const mode = useSelector((state: RootState) => state.theme.mode);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType("");
  };

  return (
    <AppBar position="static" className=" shadow-md">
      <Toolbar
        sx={{
          backgroundColor: mode === "dark" ? "#242526" : ORANGE,
        }}
        className="flex justify-center gap-6 overflow-x-auto"
        style={{ minHeight: 52 }}
      >
        {/* Trang chủ */}
        <Link href="/" className="hover:text-blue-400 transition text-sm">
          Trang Chủ
        </Link>

        {/* Thể loại có dropdown */}
        <button
          onClick={(e) => handleOpen(e, "theloai")}
          className="flex items-center gap-1 hover:text-blue-400 transition text-sm"
        >
          Thể Loại <ArrowDropDownIcon fontSize="small" />
        </button>

        {/* Xếp hạng có dropdown */}
        <button
          onClick={(e) => handleOpen(e, "xephang")}
          className="flex items-center gap-1 hover:text-blue-400 transition text-sm"
        >
          Xếp Hạng <ArrowDropDownIcon fontSize="small" />
        </button>

        {/* Các mục khác */}
        <Link href="/con-gai" className="hover:text-blue-400 transition text-sm">
          Con Gái
        </Link>
        <Link href="/con-trai" className="hover:text-blue-400 transition text-sm">
          Con Trai
        </Link>
        <Link href="/tim-truyen" className="hover:text-blue-400 transition text-sm">
          Tìm Truyện
        </Link>
        <Link href="/lich-su" className="hover:text-blue-400 transition text-sm">
          Lịch Sử
        </Link>
        <Link href="/theo-doi" className="hover:text-blue-400 transition text-sm">
          Theo Dõi
        </Link>
        <Link href="/thao-luan" className="hover:text-blue-400 transition text-sm">
          Thảo Luận
        </Link>
        <Link href="/fanpage" className="hover:text-blue-400 transition text-sm">
          Fanpage
        </Link>
        <Link href="/yeu-cau-dich" className="hover:text-blue-400 transition text-sm">
          Yêu Cầu Dịch Truyện
        </Link>
      </Toolbar>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {menuType === "theloai" && (
          <>
            <MenuItem onClick={handleClose}>Action</MenuItem>
            <MenuItem onClick={handleClose}>Adventure</MenuItem>
            <MenuItem onClick={handleClose}>Romance</MenuItem>
          </>
        )}

        {menuType === "xephang" && (
          <>
            <MenuItem onClick={handleClose}>Top Tuần</MenuItem>
            <MenuItem onClick={handleClose}>Top Tháng</MenuItem>
            <MenuItem onClick={handleClose}>Top Năm</MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
}
