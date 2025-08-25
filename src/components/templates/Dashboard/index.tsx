import React, { useEffect, useRef } from "react";
import StoryCard from "@/components/atoms/StoryCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { BLACK, WHITE } from "@/components/helper/color";

export const storyList = [
  {
    id: 1,
    storyName: "Đấu Phá Thương Khung 1 ",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 2,
    storyName: "Đấu Phá Thương Khung 2",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 3,
    storyName: "Đấu Phá Thương Khung 3",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 4,
    storyName: "Đấu Phá Thương Khung 4",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 5,
    storyName: "Đấu Phá Thương Khung 5",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 6,
    storyName: "Đấu Phá Thương Khung 6",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 7,
    storyName: "Đấu Phá Thương Khung 7",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 8,
    storyName: "Đấu Phá Thương Khung 8",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
  {
    id: 9,
    storyName: "Đấu Phá Thương Khung 9",
    image: "https://cdn.pixabay.com/photo/2023/07/19/06/56/girl-8136232_640.jpg",
    time: 1,
    unitsTime: "giờ",
    chapNumber: 450,
    isHot: true,
  },
];

export default function Dashboard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!container) return;
      // cuộn sang phải mỗi lần 200px
      container.scrollBy({ left: 300, behavior: "smooth" });

      // nếu đã cuộn hết thì quay lại đầu
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000); // 3s tự động lướt

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex justify-center">
      <section className="w-2/3 py-6">
        <h2
          style={{
            color: mode === "dark" ? WHITE : BLACK,
          }}
          className="text-xl font-bold mb-4"
        >
          🔥 Truyện Hay
        </h2>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
          {storyList.map((item) => (
            <StoryCard
              key={item?.id}
              id={item?.id}
              image={item?.image}
              time={item?.time}
              unitsTime={item?.unitsTime}
              storyName={item?.storyName}
              chapNumber={item?.chapNumber}
              isHot={item?.isHot}
            />
          ))}
        </div>

        <h2
          style={{
            color: mode === "dark" ? WHITE : BLACK,
          }}
          className="text-xl font-bold mt-4 text-white"
        >
          🔥 Truyện mới cập nhật
        </h2>
        <div className=" min-h-screen py-6 px-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {storyList.map((item) => (
              <StoryCard
                key={item?.id}
                id={item?.id}
                image={item?.image}
                time={item?.time}
                unitsTime={item?.unitsTime}
                storyName={item?.storyName}
                chapNumber={item?.chapNumber}
                isHot={item?.isHot}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
