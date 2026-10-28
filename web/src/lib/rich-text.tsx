// Renders the **bold** markers used in cv-data strings as <strong> elements
export function renderResponsibilityText(text: string, strongClassName?: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className={strongClassName}>{part}</strong>;
    }
    return part;
  });
}
