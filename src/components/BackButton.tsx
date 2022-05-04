import { ArrowLeft } from 'phosphor-react';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={onClick}
    >
      <ArrowLeft weight="bold" className="h-4 w-4" />
    </button>
  );
}
