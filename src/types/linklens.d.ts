declare module "linklens" {
  interface PreviewData {
    title: string;
    description: string;
    previewImage?: string;
  }

  interface LinkLensProps {
    content: string;
    highlightLink?: boolean;
    previewCard?: boolean;
  }

  export function getPreviewData(url: string): Promise<PreviewData>;
  export function extractLink(content: string): string | null;
  export function highlightLink(content: string): string;
  export default function LinkLens(props: LinkLensProps): JSX.Element;
}
