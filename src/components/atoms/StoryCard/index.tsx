import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toSlug } from "@/components/helper/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { BLACK, WHITE } from "@/components/helper/color";

type Props = {
  id: number;
  image: string;
  time: number;
  unitsTime: string;
  storyName: string;
  chapNumber: number;
  isHot?: boolean;
};

export default function StoryCard({
  id,
  image,
  time,
  unitsTime,
  storyName,
  chapNumber,
  isHot,
}: Props) {
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev); // Đổi trạng thái hiển thị
    }, 1000); // mỗi 1s nhấp nháy 1 lần

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/story/${toSlug(storyName)}-${id}`)}
    >
      <Card className="relative w-[12.5rem] h-[15.6rem] bg-gray-800 border-ba text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Hình ảnh bìa truyện */}
        <div className="w-full ">
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="flex item">
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {time}&nbsp;{unitsTime}&nbsp;Trước
          </div>
          {visible && isHot === true ? (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full blink">
              Hot
            </div>
          ) : undefined}
        </div>
      </Card>
      <div
        style={{
          color: mode === "dark" ? WHITE : BLACK,
        }}
        className="flex justify-center mt-2"
      >
        <Typography fontSize={15}>{storyName}</Typography>
      </div>
      <div
        style={{
          color: mode === "dark" ? WHITE : BLACK,
        }}
        className="flex justify-center mt-0.5"
      >
        <Typography fontSize={15}>Chap&nbsp;{chapNumber}</Typography>
      </div>
    </div>
  );
}
