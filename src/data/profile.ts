// Single source of truth for identity, bio and profile links.
// Links left as '' are hidden on the site until filled in.

export const profile = {
  name: 'Furkan Özçelik',
  nameAscii: 'Furkan Ozcelik',
  givenName: 'Furkan',
  familyName: 'Özçelik',
  title: 'Associate Researcher',
  affiliation: 'Yale University',
  unit: 'Aligning Research to Impact Autism (ARIA)',
  tagline: 'NeuroAI · Neural decoding · Deep generative models',
  lead:
    'Building models that read the brain’s visual language — reconstructing what people see from fMRI with deep generative models, and asking what that reveals about human vision.',
  shortBio:
    'Associate Researcher at Yale University, working on the ARIA project with Prof. Murat Günel. PhD from the NeuroAI Lab of CerCo (CNRS, Université de Toulouse) under Dr. Rufin VanRullen; the doctoral work produced Brain-Diffuser, a method for reconstructing natural scenes from fMRI signals with latent diffusion models. Collaboration with Prof. Denis Pelli’s lab at NYU on deep learning and human vision. BSc and MSc in Computer Engineering from Istanbul Technical University.',
  interests: [
    'Deep learning',
    'Neural decoding',
    'Artificial intelligence',
    'Cognitive neuroscience',
    'Large language models',
    'Philosophy of mind',
    'Consciousness',
  ],
  links: {
    scholar: 'https://scholar.google.com/citations?user=nL114mYAAAAJ&hl=en',
    github: 'https://github.com/ozcelikfu',
    linkedin: 'https://www.linkedin.com/in/furkanozcelik/',
    x: '', // TODO: X / Twitter profile URL
    orcid: '', // TODO: ORCID URL, e.g. https://orcid.org/0000-...
  },
} as const;

export type LinkKey = keyof typeof profile.links;

export const linkLabels: Record<LinkKey, string> = {
  scholar: 'Google Scholar',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  x: 'X',
  orcid: 'ORCID',
};

export const activeLinks = (Object.keys(profile.links) as LinkKey[])
  .filter((k) => profile.links[k])
  .map((k) => ({ key: k, label: linkLabels[k], href: profile.links[k] }));
