import katex from "katex";
import { KeyWord } from "./LessonComponent";
import { useReveal } from './AppContext';

/**
 * A katex wrapper that allows for simple inline rendering of mathematical expressions.
 */
export function Latex({ content, keyword }: { content: string, keyword?: boolean }) {
  const { reveal } = useReveal();
  
  if (!reveal && keyword) {
    return <KeyWord content={
      content
        .replaceAll('\\frac', '')
        .replaceAll(/(?<!\\)\{/g, '')
        .replaceAll(/(?<!\\)\}/g, '')
        .replaceAll('\\sqrt', '')
        .padEnd(3, ' ')
    } />;
  }

  const html = katex.renderToString(content, {
    displayMode: false,
    throwOnError: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}