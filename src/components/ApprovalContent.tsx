import type { ReactNode } from 'react';
import { CheckCircle, FileCheck } from 'lucide-react';

export function ApprovalContentLayout({ children }: { children: ReactNode }) {
  return (
    <article className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {children}
      </div>
    </article>
  );
}

export function ContentSectionCard({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:p-7">
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
        <FileCheck className="h-5 w-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{children}</h2>
    </div>
  );
}

export function ContentParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">{children}</p>;
}

export function ContentList({
  items,
  numbered,
}: {
  items: ReactNode[];
  numbered?: boolean;
}) {
  const ListTag = numbered ? 'ol' : 'ul';

  return (
    <ListTag className={`mt-5 grid gap-3 ${numbered ? 'list-decimal pl-6' : ''}`}>
      {items.map((item, index) => (
        <li
          key={typeof item === 'string' ? item : index}
          className={`rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-gray-200 sm:text-base ${
            numbered ? 'pl-3' : 'flex gap-3'
          }`}
        >
          {numbered ? (
            item
          ) : (
            <>
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
              <span>{item}</span>
            </>
          )}
        </li>
      ))}
    </ListTag>
  );
}

export function FAQSection({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mt-8 rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:p-7">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}

export function FAQItem({
  question,
  answer,
  collapsible = false,
}: {
  question: ReactNode;
  answer: ReactNode;
  collapsible?: boolean;
}) {
  if (collapsible) {
    return (
      <details className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        <summary className="cursor-pointer list-none text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
          <strong>{question}</strong>
        </summary>
        <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">{answer}</p>
      </details>
    );
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <h3 className="text-base font-semibold text-white">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">{answer}</p>
    </div>
  );
}
