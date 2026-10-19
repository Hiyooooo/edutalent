export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: '16/9' | '4/3';
}

export const images: Record<string, ImageAsset> = {
  hero: {
    id: "EDU-01",
    src: "/images/edu-01-learning-session.webp",
    alt: "Peserta mengikuti sesi belajar profesional di ruang kerja",
    width: 1600,
    height: 900,
    aspectRatio: "16/9",
  },
  consulting: {
    id: "EDU-02",
    src: "/images/edu-02-consulting-team.webp",
    alt: "Tim konsultan meninjau dokumen kerja bersama",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
  },
  techTalent: {
    id: "EDU-03",
    src: "/images/edu-03-technical-training.webp",
    alt: "Peserta dewasa mengikuti pelatihan keterampilan teknis",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
  },
  education: {
    id: "EDU-04",
    src: "/images/edu-04-education-workshop.webp",
    alt: "Fasilitator dan peserta dewasa berdiskusi dalam lokakarya",
    width: 1200,
    height: 900,
    aspectRatio: "4/3",
  },
  planning: {
    id: "EDU-05",
    src: "/images/edu-05-learning-planning.webp",
    alt: "Catatan perencanaan program belajar di meja kerja",
    width: 1600,
    height: 900,
    aspectRatio: "16/9",
  },
  reflection: {
    id: "EDU-06",
    src: "/images/edu-06-team-reflection.webp",
    alt: "Rekan kerja berdiskusi setelah sesi pembelajaran",
    width: 1600,
    height: 900,
    aspectRatio: "16/9",
  },
};
