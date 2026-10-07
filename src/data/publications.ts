export type PubType = 'journal' | 'conference' | 'workshop' | 'talk' | 'chapter' | 'thesis';
export type Theme = 'decoding' | 'vision' | 'meaning' | 'earlier';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort?: string;
  year?: number;
  type: PubType;
  theme: Theme;
  note?: string;
  lang?: 'en' | 'tr';
  translation?: string;
  highlight?: boolean;
  links?: { doi?: string; arxiv?: string; pdf?: string; code?: string; page?: string };
}

export const ME = 'Furkan Ozcelik';

export const typeLabels: Record<PubType, string> = {
  journal: 'Journal',
  conference: 'Conference',
  workshop: 'Workshop',
  talk: 'Talk',
  chapter: 'Book chapter',
  thesis: 'Thesis',
};

export const publications: Publication[] = [
  {
    id: 'ozcelik2024spatial',
    title: 'Revealing spatial-frequency channels in an ensemble encoding model of human fMRI',
    authors: ['Furkan Ozcelik', 'Ajay Subramanian', 'Najib Majaj', 'Denis Pelli'],
    venue: 'NeurIPS 2024 Workshop — UniReps: Unifying Representations in Neural Models',
    venueShort: 'NeurIPS 2024 · UniReps',
    year: 2024,
    type: 'workshop',
    theme: 'vision',
    highlight: true,
    links: { page: 'https://neurips.cc/virtual/2024/102671' },
  },
  {
    id: 'ferrante2024eyes',
    title: 'Through their eyes: Multi-subject brain decoding with simple alignment techniques',
    authors: ['Matteo Ferrante', 'Tommaso Boccato', 'Furkan Ozcelik', 'Rufin VanRullen', 'Nicola Toschi'],
    venue: 'Imaging Neuroscience, 2',
    venueShort: 'Imaging Neuroscience',
    year: 2024,
    type: 'journal',
    theme: 'decoding',
    links: { doi: '10.1162/imag_a_00170' },
  },
  {
    id: 'ferrante2023multimodal',
    title: 'Multimodal decoding of human brain activity into images and text',
    authors: ['Matteo Ferrante', 'Tommaso Boccato', 'Furkan Ozcelik', 'Rufin VanRullen', 'Nicola Toschi'],
    venue: 'NeurIPS 2023 Workshop — UniReps (PMLR 243)',
    venueShort: 'NeurIPS 2023 · UniReps',
    year: 2023,
    type: 'workshop',
    theme: 'decoding',
    links: { page: 'https://proceedings.mlr.press/v243/ferrante24a.html' },
  },
  {
    id: 'ozcelik2023brain',
    title: 'Natural scene reconstruction from fMRI signals using generative latent diffusion',
    authors: ['Furkan Ozcelik', 'Rufin VanRullen'],
    venue: 'Scientific Reports, 13, 15666',
    venueShort: 'Scientific Reports',
    year: 2023,
    type: 'journal',
    theme: 'decoding',
    note: 'Brain-Diffuser',
    highlight: true,
    links: {
      doi: '10.1038/s41598-023-42891-8',
      arxiv: '2303.05334',
      code: 'https://github.com/ozcelikfu/brain-diffuser',
    },
  },
  {
    id: 'ozcelik2022icgan',
    title:
      'Reconstruction of perceived images from fMRI patterns and semantic brain exploration using instance-conditioned GANs',
    authors: ['Furkan Ozcelik', 'Bhavin Choksi', 'Milad Mozafari', 'Leila Reddy', 'Rufin VanRullen'],
    venue: 'International Joint Conference on Neural Networks (IJCNN) 2022',
    venueShort: 'IJCNN 2022',
    year: 2022,
    type: 'conference',
    theme: 'decoding',
    note: 'Oral presentation',
    highlight: true,
    links: {
      doi: '10.1109/IJCNN55064.2022.9892673',
      arxiv: '2202.12692',
      code: 'https://github.com/ozcelikfu/IC-GAN_fMRI_Reconstruction',
    },
  },
  {
    id: 'baykal2022deshuffle',
    title: 'Exploring DeshuffleGANs in self-supervised generative adversarial networks',
    authors: ['Gulcin Baykal', 'Furkan Ozcelik', 'Gozde Unal'],
    venue: 'Pattern Recognition, 122, 108244',
    venueShort: 'Pattern Recognition',
    year: 2022,
    type: 'journal',
    theme: 'earlier',
    links: { doi: '10.1016/j.patcog.2021.108244' },
  },
  {
    id: 'ozcelik2020pancolor',
    title: 'Rethinking CNN-based pansharpening: Guided colorization of panchromatic images via GANs',
    authors: ['Furkan Ozcelik', 'Ugur Alganci', 'Elif Sertel', 'Gozde Unal'],
    venue: 'IEEE Transactions on Geoscience and Remote Sensing, 59(4)',
    venueShort: 'IEEE TGRS',
    year: 2020,
    type: 'journal',
    theme: 'earlier',
    note: 'PanColorGAN',
    links: {
      doi: '10.1109/TGRS.2020.3010441',
      arxiv: '2006.16644',
      code: 'https://github.com/ozcelikfu/PanColorGAN',
    },
  },
  {
    id: 'trapl2019anncolvar',
    title:
      'Anncolvar: Approximation of complex collective variables by artificial neural networks for analysis and biasing of molecular simulations',
    authors: ['Dalibor Trapl', 'Izabela Horvacanin', 'Vaclav Mareska', 'Furkan Ozcelik', 'Gozde Unal', 'Vojtech Spiwok'],
    venue: 'Frontiers in Molecular Biosciences, 6, 25',
    venueShort: 'Frontiers in Mol. Biosciences',
    year: 2019,
    type: 'journal',
    theme: 'earlier',
    links: { doi: '10.3389/fmolb.2019.00025' },
  },
  {
    id: 'ozcelik-llm-god',
    title: 'Exploring prompts and identities for the arguments of God’s existence on LLMs',
    authors: ['Furkan Ozcelik'],
    venue: 'AI, Philosophy and Religion Conference — Warsaw, May 2024',
    venueShort: 'Warsaw · May 2024',
    year: 2024,
    type: 'talk',
    theme: 'meaning',
  },
  {
    id: 'ozcelik-chatgpt-god',
    title: 'Exploring prompts and identities for the arguments of God’s existence on ChatGPT',
    authors: ['Furkan Ozcelik'],
    venue: 'Religion, Logic and AI — Sinaia, September 2023',
    venueShort: 'Sinaia · September 2023',
    year: 2023,
    type: 'talk',
    theme: 'meaning',
  },
  {
    id: 'ozcelik-chapter-ai',
    title: 'Yapay Zekâ: Uygulamalar, Tehlikeler ve Tartışmalar',
    translation: 'Artificial intelligence: applications, dangers and debates',
    authors: ['Furkan Özçelik'],
    venue: 'Çağla Yüzleşmek: Din, Kimlik ve Düşünce — Mana Yayınları',
    venueShort: 'Mana Yayınları',
    type: 'chapter',
    theme: 'meaning',
    lang: 'tr',
  },
  {
    id: 'ozcelik-chapter-llm',
    title: 'Derin Öğrenme ve Büyük Dil Modellerinin Felsefi ve Dini Etkileri',
    translation: 'Philosophical and religious implications of deep learning and large language models',
    authors: ['Furkan Özçelik'],
    venue: 'Yapay Zekâ ve İslam — Tima Yayınları',
    venueShort: 'Tima Yayınları',
    type: 'chapter',
    theme: 'meaning',
    lang: 'tr',
  },
];

export const byTheme = (t: Theme) => publications.filter((p) => p.theme === t);
export const highlighted = publications.filter((p) => p.highlight);

export function linkList(p: Publication) {
  const out: { label: string; href: string }[] = [];
  const l = p.links ?? {};
  if (l.doi) out.push({ label: 'DOI', href: `https://doi.org/${l.doi}` });
  if (l.arxiv) out.push({ label: 'arXiv', href: `https://arxiv.org/abs/${l.arxiv}` });
  if (l.page) out.push({ label: 'Paper', href: l.page });
  if (l.pdf) out.push({ label: 'PDF', href: l.pdf });
  if (l.code) out.push({ label: 'Code', href: l.code });
  return out;
}

export function primaryHref(p: Publication) {
  const l = p.links ?? {};
  if (l.doi) return `https://doi.org/${l.doi}`;
  return l.page ?? (l.arxiv ? `https://arxiv.org/abs/${l.arxiv}` : undefined);
}
