import { Building2, Layers, Paintbrush, ShieldCheck, Sparkles, Hammer } from 'lucide-react'

export const COMPANY = {
  name: 'Norvan',
  tagline: 'Spécialistes du bardage & de la façade',
  tiktok: 'https://www.tiktok.com/@facadenorvan',
  tiktokHandle: '@facadenorvan',
  email: 'contact@norvanfacade.com',
  phone: '+33 6 12 34 56 78',
  location: 'Au service de la région et des environs',
}

export const NAV_LINKS = [
  { label: 'Réalisations', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#process' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: Layers,
    title: 'Bardage composite',
    description: 'Panneaux composites modernes conçus pour la durabilité et une finition contemporaine impeccable.',
  },
  {
    icon: Paintbrush,
    title: 'Revêtement de façade',
    description: 'Revêtements protecteurs projetés qui rénovent, imperméabilisent et transforment toute surface extérieure.',
  },
  {
    icon: Building2,
    title: 'Rénovation complète',
    description: 'Dépose et remplacement intégral avec des systèmes premium en fibrociment, PVC et métal.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection climatique',
    description: 'Systèmes de pare-pluie et isolation qui protègent votre bâtiment contre les intempéries.',
  },
  {
    icon: Sparkles,
    title: 'Restauration',
    description: 'Redonner vie aux façades fatiguées grâce à un nettoyage, une réparation et une rénovation experts.',
  },
  {
    icon: Hammer,
    title: 'Finitions sur mesure',
    description: 'Habillages, angles et détails architecturaux personnalisés selon votre vision.',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Nous évaluons votre bâtiment, écoutons vos objectifs et recommandons le système de façade idéal.',
  },
  {
    number: '02',
    title: 'Conception & devis',
    description: 'Tarification transparente avec échantillons de matériaux et planning clair. Aucune surprise.',
  },
  {
    number: '03',
    title: 'Préparation',
    description: 'Préparation des surfaces, échafaudage et protection soignés pour une finition qui dure des décennies.',
  },
  {
    number: '04',
    title: 'Application',
    description: 'Nos artisans posent ou projettent avec précision, en documentant chaque étape pour vous.',
  },
  {
    number: '05',
    title: 'Révélation finale',
    description: 'Un nettoyage impeccable et une visite de votre bien transformé.',
  },
]

export const PROJECTS = [
  {
    title: 'Résidence des Berges',
    category: 'Bardage composite',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accent: '#60a5fa',
  },
  {
    title: 'Loft du Centre',
    category: 'Revêtement de façade',
    gradient: 'from-amber-500/20 to-orange-500/10',
    accent: '#f59e0b',
  },
  {
    title: 'Villa des Hauteurs',
    category: 'Rénovation complète',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    accent: '#34d399',
  },
  {
    title: 'Cour des Érables',
    category: 'Restauration',
    gradient: 'from-rose-500/20 to-pink-500/10',
    accent: '#fb7185',
  },
]

export const STATS = [
  { value: '450+', label: 'Façades réalisées' },
  { value: '12', label: 'Ans de savoir-faire' },
  { value: '98%', label: 'Clients fidèles' },
  { value: '25 ans', label: 'Garantie main-d’œuvre' },
]

export const TESTIMONIALS = [
  {
    quote: 'Norvan a complètement transformé notre maison. Le revêtement projeté semble neuf et l’équipe a été méticuleuse du début à la fin.',
    author: 'Sarah M.',
    role: 'Propriétaire',
  },
  {
    quote: 'Professionnels, ponctuels, et le souci du détail est sans égal. Notre façade commerciale n’a jamais été aussi belle.',
    author: 'David L.',
    role: 'Gestionnaire immobilier',
  },
  {
    quote: 'Je les ai découverts sur TikTok et le travail réel est encore plus impressionnant que les vidéos. Je recommande vivement.',
    author: 'Elena R.',
    role: 'Propriétaire',
  },
]
