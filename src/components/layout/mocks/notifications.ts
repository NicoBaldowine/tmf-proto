export type NotificationItem = {
  id: string;
  type: 'comment' | 'like' | 'share' | 'system';
  message: string;
  timestamp: string; // e.g., "2m ago", "1h ago", "Yesterday"
  read: boolean;
  actor?: {
    name: string;
    avatarUrl?: string;
  };
};

export const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'comment',
    message: 'John Doe commented on your post: "Great insights on AAPL!"',
    timestamp: '5m ago',
    read: false,
    actor: { name: 'John Doe', avatarUrl: 'https://ui-avatars.com/api/?name=John+Doe&background=random' },
  },
  {
    id: '2',
    type: 'like',
    message: 'Jane Smith liked your article about MSFT performance.',
    timestamp: '15m ago',
    read: false,
    actor: { name: 'Jane Smith', avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random' },
  },
  {
    id: '3',
    type: 'system',
    message: 'Your subscription to "Tech Leaders" is expiring soon.',
    timestamp: '1h ago',
    read: true,
  },
  {
    id: '4',
    type: 'share',
    message: 'Michael B. shared your analysis of GOOGL.',
    timestamp: '3h ago',
    read: true,
    actor: { name: 'Michael B.', avatarUrl: 'https://ui-avatars.com/api/?name=Michael+B&background=random' },
  },
  {
    id: '5',
    type: 'comment',
    message: 'Sarah Lee replied to your comment on the NVDA thread.',
    timestamp: 'Yesterday',
    read: false,
    actor: { name: 'Sarah Lee', avatarUrl: 'https://ui-avatars.com/api/?name=Sarah+Lee&background=random' },
  },
]; 