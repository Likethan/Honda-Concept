import Hero from '@/components/Hero';
import EditorialIntro from '@/components/EditorialIntro';
import EngineeringSection from '@/components/EngineeringSection';
import PowertrainDiagram from '@/components/PowertrainDiagram';
import CabinSection from '@/components/CabinSection';
import DetailGallery from '@/components/DetailGallery';
import SpecMatrix from '@/components/SpecMatrix';
import EvolutionTimeline from '@/components/EvolutionTimeline';

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <EngineeringSection />
      <PowertrainDiagram />
      <CabinSection />
      <DetailGallery />
      <SpecMatrix />
      <EvolutionTimeline />
    </>
  );
}
