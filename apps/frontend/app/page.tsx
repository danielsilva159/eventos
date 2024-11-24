import Link from 'next/link';
import LogoGrande from './components/template/LogoGrande';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center gap-10 items-center bg-[url('/background-inicio.svg')] bg-cover">
      <div className="flex flex-col items-center ga-4">
        <LogoGrande />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center">
          Crie e gerencie o convite do seu evento de forma rapida e facil, sem complicaçẽs
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase select-none">
        Crie o seu Evento
      </Link>
    </div>
  );
}
