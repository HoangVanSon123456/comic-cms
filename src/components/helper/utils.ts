export function toSlug(str: string): string {
  return str
    .normalize("NFD") // tách dấu khỏi chữ
    .replace(/[\u0300-\u036f]/g, "") // xoá dấu
    .replace(/đ/g, "d") // chuyển đ -> d
    .replace(/Đ/g, "d")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // xoá ký tự đặc biệt
    .replace(/\s+/g, "-") // thay khoảng trắng bằng -
    .replace(/-+/g, "-"); // xoá bớt dấu - thừa
}

interface SplitSlugResult {
  afterSecondSlash: string; // phần sau / thứ 2
  beforeLastDash: string;    // phần trước - cuối cùng
  lastNumber: number | null; // số sau - cuối cùng
}

export function splitSlugAdvanced(slug: string): SplitSlugResult {
  if (!slug) return { afterSecondSlash: "", beforeLastDash: "", lastNumber: null };

  const parts = slug.split("/");  
  const afterSecondSlash = parts[2] || ""; // phần sau / thứ 2

  const lastDashIndex = afterSecondSlash.lastIndexOf("-");
  if (lastDashIndex === -1) {
    return { afterSecondSlash, beforeLastDash: afterSecondSlash, lastNumber: null };
  }

  const beforeLastDash = afterSecondSlash.slice(0, lastDashIndex);
  const lastPart = afterSecondSlash.slice(lastDashIndex + 1);
  const lastNumber = /^\d+$/.test(lastPart) ? Number(lastPart) : null;

  return { afterSecondSlash, beforeLastDash, lastNumber };
}

