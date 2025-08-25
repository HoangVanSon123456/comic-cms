import { Container, Typography, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, GitHub } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ORANGE, WHITE } from "@/components/helper/color";

export default function Footer() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <footer
        style={{
          backgroundColor: mode === "dark" ? "#242526" : WHITE,
          color: mode === "dark" ? WHITE : "#242526",
        }}
        className="mt-10"
      >
        <Divider sx={{ backgroundColor: mode === "dark" ? WHITE : ORANGE, height: 1 }} />
        <Container maxWidth="lg">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
            {/* Logo + tên web */}
            <div className="flex items-center py-2">
              <Image
                src="https://st.truyenqqgo.com/template/frontend/images/logo-icon.png"
                alt="TruyenQQ"
                width={30}
                height={30}
                unoptimized
              />
              <Typography sx={{ fontSize: "1rem", textTransform: "uppercase" }}>truyen</Typography>
              <Typography
                sx={{
                  color: "orange",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                qq
              </Typography>
            </div>

            {/* Menu liên kết SEO-friendly */}
            <nav aria-label="Liên kết quan trọng">
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition"
                    title="Giới thiệu về TruyenOnline"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition"
                    title="Liên hệ với TruyenOnline"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policy"
                    className="hover:text-blue-400 transition"
                    title="Chính sách bảo mật và điều khoản"
                  >
                    Chính sách
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social icons */}
            <div className="flex gap-2" aria-label="Liên kết mạng xã hội">
              <IconButton
                color="inherit"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-400"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-400"
              >
                <GitHub />
              </IconButton>
            </div>
          </div>

          {/* Dòng copyright */}
          <div className="border-t border-gray-700 py-4 text-center">
            <Typography variant="body2" className="text-gray-400" component="p">
              © {new Date().getFullYear()} TruyenOnline. Nội dung được bảo vệ bản quyền.
            </Typography>
          </div>
        </Container>
      </footer>
    </>
  );
}
