'use client';

import { useState } from 'react';

type CopyEmailButtonProps = {
  email: string;
};

export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent"
      aria-live="polite"
    >
      {copied ? 'Email copied' : 'Copy email'}
    </button>
  );
};
