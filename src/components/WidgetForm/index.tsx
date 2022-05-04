import { useCallback, useState } from 'react';

import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageUR from '../../assets/thought.svg';

import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUR,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackType(null);
  }, [feedbackType]);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType
        ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequest={handleRestartFeedback}
          />
        )}

      <footer className="text-xs text-neutral-400">
        Feito por&nbsp;
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/joaopedroluz57/"
          target="_blank"
          rel="noreferrer"
        >
          João Pedro Luz
        </a>
      </footer>
    </div>
  );
}
