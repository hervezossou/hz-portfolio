export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    tag: string;
    accent: string;
    bgColor: string;
    shape: "circle" | "grid" | "lines" | "cross";
    showCode?: boolean;
}
