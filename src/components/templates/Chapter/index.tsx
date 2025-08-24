"use client";
import React from "react";
import { Button, Card, CardContent, Typography, Chip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Chapter {
  chapterId: number;
  title: string;
  images: string[];
}

const chapter: Chapter = {
  chapterId: 233,
  title: "Chương 233",
  images: [
    "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252503_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252502_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/28/04/06/girl-8093350_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252503_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252502_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252503_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/08/20/girl-8252502_640.jpg",
  ],
};

export default function Chapter() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center py-6 bg-neutral-900 text-white">
        <Card className="w-full max-w-4xl bg-neutral-800 shadow-lg rounded-xl">
          <CardContent className="space-y-4">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 space-x-2">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => router.push("/")}
              >
                Trang Chủ
              </span>{" "}
              /
              <span className="cursor-pointer hover:underline">
                {" "}
                Dương Dịch Vi Hoạn
              </span>{" "}
              /<span className="text-gray-200"> Chương 274</span>
            </div>

            {/* Tiêu đề Chapter */}
            <Typography variant="h6" className="font-semibold">
              Dương Dịch Vi Hoạn - Chapter 274{" "}
              <span className="text-sm text-gray-400 font-normal">
                (Cập nhật lúc: 23:23 04/09/2024)
              </span>
            </Typography>

            {/* Nút điều hướng */}
            <div className="flex justify-center gap-3">
              <Button
                variant="contained"
                color="info"
                size="small"
                className="rounded-lg"
              >
                ← Chap trước
              </Button>
              <Button
                variant="contained"
                color="info"
                size="small"
                className="rounded-lg"
              >
                Chap sau →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col">
        {chapter.images.map((src, idx) => (
          <div key={idx} className="w-full flex justify-center">
            {/* <Image
              src={src}
              alt={`Page ${idx + 1}`}
              width={800}
              height={1200}
              className="rounded-lg shadow-md"
            /> */}
            <Image
              src={src}
              alt="Dưỡng Địch Vi Hoạn"
              width={800}
              height={1200}
              className="rounded-lg object-cover shadow-md"
              unoptimized
            />
          </div>
        ))}
        <div className="flex justify-center gap-3 mt-5">
          <Button
            variant="contained"
            color="info"
            size="small"
            className="rounded-lg"
          >
            ← Chap trước
          </Button>
          <Button
            variant="contained"
            color="info"
            size="small"
            className="rounded-lg"
          >
            Chap sau →
          </Button>
        </div>
      </div>
    </>
  );
}
