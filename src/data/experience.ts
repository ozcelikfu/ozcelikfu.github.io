export interface Position {
  period: string;
  start: number;
  role: string;
  org: string;
  group?: string;
  detail?: string;
  with?: string;
  kind: 'research' | 'teaching';
}

export const positions: Position[] = [
  {
    period: '2025 — now',
    start: 2025,
    role: 'Associate Researcher',
    org: 'Yale University',
    group: 'Aligning Research to Impact Autism (ARIA)',
    with: 'Prof. Murat Günel',
    kind: 'research',
  },
  {
    period: '2023 — 2025',
    start: 2023,
    role: 'Research Assistant',
    org: 'New York University',
    group: 'Pelli Lab',
    detail: 'Deep learning and human vision.',
    with: 'Prof. Denis Pelli',
    kind: 'research',
  },
  {
    period: '2020 — 2024',
    start: 2020,
    role: 'PhD Researcher',
    org: 'CerCo UMR5549, CNRS · Université de Toulouse',
    group: 'NeuroAI Lab',
    detail: 'Natural image reconstruction from fMRI with deep generative models.',
    with: 'Dr. Rufin VanRullen',
    kind: 'research',
  },
  {
    period: '2018 — 2020',
    start: 2018,
    role: 'Research Assistant',
    org: 'Istanbul Technical University',
    group: 'ITU Computer Vision Laboratory',
    detail: 'Deep learning and computer vision, Turkcell–ITU Researcher Funding.',
    with: 'Prof. Dr. Gözde Ünal',
    kind: 'research',
  },
];

export const teaching: Position[] = [
  { period: 'Summer 2023', start: 2023, role: 'Research Assistant', org: 'Neuromatch Academy', group: 'NeuroAI course', kind: 'teaching' },
  { period: 'Summer 2023', start: 2023, role: 'Research Assistant', org: 'Neuromatch Academy', group: 'Deep Learning course', kind: 'teaching' },
  { period: 'Summer 2022', start: 2022, role: 'Teaching Assistant', org: 'Neuromatch Academy', group: 'Deep Learning course', kind: 'teaching' },
  { period: 'Summer 2021', start: 2021, role: 'Teaching Assistant', org: 'Neuromatch Academy', group: 'Computational Neuroscience course', kind: 'teaching' },
  { period: 'Autumn 2019', start: 2019, role: 'Teaching Assistant', org: 'Istanbul Technical University', group: 'BLG561 Deep Learning (MSc)', kind: 'teaching' },
];

export interface Degree {
  period: string;
  degree: string;
  org: string;
  note?: string;
  thesis: { title: string; supervisor: string; summary: string; href?: string };
}

export const education: Degree[] = [
  {
    period: '2020 — 2024',
    degree: 'PhD',
    org: 'NeuroAI Lab, CerCo UMR5549, CNRS · Université de Toulouse III – Paul Sabatier',
    thesis: {
      title:
        'Deciphering the brain’s visual language: Natural image reconstruction using deep generative models from fMRI signals',
      supervisor: 'Dr. Rufin VanRullen',
      summary:
        'Brings together two published studies on reconstructing natural images and scenes from fMRI with deep generative models — GANs, variational autoencoders and latent diffusion models — with region-of-interest analyses relating latent features to brain areas.',
      href: 'https://doi.org/10.70675/6ebf90e7z8a6fz46d5zac4dz663917db8f33',
    },
  },
  {
    period: '2018 — 2020',
    degree: 'MSc, Computer Engineering',
    org: 'Istanbul Technical University',
    note: 'GPA 3.94 / 4',
    thesis: {
      title:
        'Self-supervised pansharpening: Guided colorization of panchromatic images using generative adversarial networks',
      supervisor: 'Prof. Dr. Gözde Ünal',
      summary:
        'A GAN architecture that takes panchromatic and multispectral satellite images and produces an output that is high-resolution in both the spatial and the spectral domain.',
    },
  },
  {
    period: '2014 — 2018',
    degree: 'BSc, Computer Engineering',
    org: 'Istanbul Technical University',
    thesis: {
      title: 'Visual image reconstruction from fMRI signals with deep generative models',
      supervisor: 'Prof. Dr. Gözde Ünal',
      summary:
        'Deep convolutional GAN and autoencoder models that reconstruct the images shown to subjects from their fMRI responses — the first step on the path that continued into the PhD.',
    },
  },
];
