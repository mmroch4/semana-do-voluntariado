import { cn } from "@/lib/cn";

/** Intro paragraph that follows a section header. */
export function Lede({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "m-0 max-w-[56rem] text-base leading-relaxed text-text-secondary md:text-[1.0625rem]",
        className,
      )}
    >
      {children}
    </p>
  );
}
