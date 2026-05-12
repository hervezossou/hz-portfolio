import type { HugeIcon } from "@/types/hugeicons";

export interface ServicePreview {
  id: number;
  eyebrow: string;
  title: string;
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
  icon: HugeIcon;
}
