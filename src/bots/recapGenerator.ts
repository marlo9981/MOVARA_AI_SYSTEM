export interface RecapData {
  title: string;
  summary: string;
  keyPoints: string[];
  actionItems?: string[];
  timestamp?: Date;
}

export function formatRecap(data: RecapData): string {
  const date = data.timestamp ? data.timestamp.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let message = `📊 *${data.title}*\n`;
  message += `📅 _${date}_\n\n`;
  message += `${data.summary}\n\n`;

  message += `*Key Points:*\n`;
  data.keyPoints.forEach(point => {
    message += `• ${point}\n`;
  });

  if (data.actionItems && data.actionItems.length > 0) {
    message += `\n*Action Items:*\n`;
    data.actionItems.forEach(item => {
      message += `☐ ${item}\n`;
    });
  }

  return message;
}
