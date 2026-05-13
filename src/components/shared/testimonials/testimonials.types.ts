export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    company: string;
    highlight?: string; // mot ou phrase clé à mettre en avant dans la citation
}
