import React from "react";
import Image from "next/image";
import { Button, Chip, Typography, Box } from "@mui/material";
import ChapterList from "./componenst/ChapterList";

export default function StoryDetails() {
  return (
    <div className="flex justify-center mt-10">
      <Box className="bg-[#242526] w-2/3 text-white p-6 rounded-lg shadow-lg">
        {/* Breadcrumb */}
        <Typography variant="body2" className="text-gray-400 mb-4">
          Trang Chủ / <span className="text-white">Dưỡng Địch Vi Hoạn</span>
        </Typography>

        <Box className="flex flex-col md:flex-row mt-2 gap-6">
          {/* Ảnh bìa */}
          <Box className="w-[200px] flex-shrink-0">
            <Image
              src="https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg"
              alt="Dưỡng Địch Vi Hoạn"
              width={200}
              height={280}
              className="rounded-lg object-cover shadow-md"
              unoptimized
            />
          </Box>

          {/* Nội dung chi tiết */}
          <Box className="flex-1">
            <Typography variant="h5" className="font-bold mb-3">
              Dưỡng Địch Vi Hoạn
            </Typography>

            <Box className="space-y-1 mb-3 text-sm text-gray-300">
              <Typography>
                <b>Tác giả:</b> Đang Cập Nhật
              </Typography>
              <Typography>
                <b>Tình trạng:</b> Đang Cập Nhật
              </Typography>
              <Typography>
                <b>❤ Lượt thích:</b> 1675
              </Typography>
              <Typography>
                <b>👥 Lượt theo dõi:</b> 5,488
              </Typography>
              <Typography>
                <b>👁️ Lượt xem:</b> 1,355,576
              </Typography>
            </Box>

            {/* Tags */}
            <Box className="flex flex-wrap gap-2 mb-4">
              {["Drama", "Manhua", "Romance", "Ngôn Tình", "Xuyên Không", "Truyện Màu"].map(
                (tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    className="!text-orange-400 !border-orange-400"
                  />
                )
              )}
            </Box>

            {/* Buttons */}
            <Box className="flex flex-wrap gap-3 mb-4">
              <Button variant="contained" className="!bg-green-500 hover:!bg-green-600">
                Đọc từ đầu
              </Button>
              <Button variant="contained" className="!bg-red-500 hover:!bg-red-600">
                ❤ Theo dõi
              </Button>
              <Button variant="contained" className="!bg-pink-500 hover:!bg-pink-600">
                👍 Thích
              </Button>
              <Button variant="contained" className="!bg-blue-500 hover:!bg-blue-600">
                📖 Đọc tiếp
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Giới thiệu */}
        <Box className="mt-6">
          <Typography variant="h6" className="flex items-center gap-2 mb-2">
            ℹ️ Giới thiệu
          </Typography>
          <Typography className="text-gray-300 leading-relaxed">
            Truyện tranh <b>Dưỡng Địch Vi Hoạn</b> được cập nhật nhanh và đầy đủ nhất tại TruyenQQ.
            Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ TruyenQQ ra các chương mới nhất
            của truyện <b>Dưỡng Địch Vi Hoạn</b>.
          </Typography>
        </Box>

        <div className="mt-6">
          <ChapterList />
        </div>
      </Box>
    </div>
  );
}
