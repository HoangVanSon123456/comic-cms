"use client";

import { WHITE } from "@/components/helper/color";
import { splitSlugAdvanced, toSlug } from "@/components/helper/utils";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const chapters = [
  { id: 233, date: "09/11/2023" },
  { id: 232, date: "09/11/2023" },
  { id: 231, date: "09/11/2023" },
  { id: 230, date: "20/04/2023" },
  { id: 229, date: "20/04/2023" },
  { id: 213, date: "20/04/2023" },
  { id: 212, date: "20/04/2023" },
  { id: 211, date: "20/04/2023" },
  { id: 210, date: "20/04/2023" },
  { id: 208, date: "20/04/2023" },
  { id: 207, date: "20/04/2023" },
  { id: 205, date: "20/04/2023" },
  { id: 204, date: "20/04/2023" },
  { id: 203, date: "20/04/2023" },
  { id: 202, date: "20/04/2023" },
];

export default function ChapterList() {
  const router = useRouter();
  const pathname = usePathname();

  const result = splitSlugAdvanced(pathname);
  const storyName = result.beforeLastDash;
  const id = result.lastNumber;
  // <div
  //   className=" flex justify-center items-center h-screen cursor-pointer"
  //   onClick={() =>
  //     router.push(`/story/${toSlug(storyName)}-${id}/chapter-${1}`)
  //   }
  // >
  //   Item
  // </div>
  return (
    <>
      <Typography
        variant="h6"
        className="flex items-center gap-2 font-semibold mb-3"
      >
        📚 Danh sách chương
      </Typography>

      <Card className="text-white rounded-xl shadow-lg border mt-3">
        <CardContent
          sx={{
            backgroundColor: "#242526",
            borderColor: WHITE,
          }}
        >
          {/* Header */}

          {/* Danh sách có scroll */}
          <div className="max-h-96 overflow-y-auto">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center px-3 py-2 border-b bg-[#242526] hover:bg-neutral-800 transition cursor-pointer"
                onClick={() =>
                  router.push(
                    `/story/${toSlug(storyName)}-${id}/chapter-${ch.id}`
                  )
                }
              >
                <Typography variant="body2" className="font-medium">
                  Chương {ch.id}
                </Typography>
                <Typography variant="caption" className="text-gray-400">
                  {ch.date}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
