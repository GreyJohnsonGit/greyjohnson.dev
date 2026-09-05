import { useReveal } from "./AppContext";

export function KeyWord({ 
  content, 
  align, 
  minLength = 0 
}: { 
  content: string; 
  align?: 'left' | 'right' | 'center', 
  minLength?: number 
}) {
  const { reveal } = useReveal();

  const style: React.CSSProperties = {
    ...reveal ? Styles.RevealedWord : Styles.HiddenWord,
  };
  
  if (align) {
    style.display = 'block';
    style.textAlign = align;
  }

  console.log(reveal, content, minLength)
  
  return (
    <strong
      style={style}
    >
      {reveal ? " " + content : "".padEnd(Math.max(minLength, content.length), '_')}
    </strong>
  );
}

export function Split({
  left,
  right,
  leftWeight,
  rightWeight,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWeight?: number;
  rightWeight?: number;
}) {
  return (
    <div style={Styles.Split}>
      <div style={{ ...Styles.Column, flex: leftWeight ?? 1 }}>{left}</div>
      <div style={{ ...Styles.Column, flex: rightWeight ?? 1 }}>{right}</div>
    </div>
  );
}
  
export function Section({ children, outline }: { children: React.ReactNode; outline?: boolean }) {
  const style = {
    ...outline ? { border: '1px solid var(--border-color)', margin: '-1px', padding: '4px' } : {},
  }
  
  return (
    <section style={style}>
      {children}
    </section>
  );
}

const Styles = {
  Split: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  } satisfies React.CSSProperties,

  Column: {
    flex: 1,
    minWidth: 0,
  } satisfies React.CSSProperties,

  HiddenWord: {
    color: 'transparent',
    textDecoration: 'underline',
    textDecorationColor: 'var(--text-primary)',
    textDecorationSkipInk: 'none'
  } satisfies React.CSSProperties,

  RevealedWord: {} satisfies React.CSSProperties,
};