'use client';

import { Bell, MessageSquareText, Heart, Share2, Info } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockNotifications, NotificationItem } from "@/components/layout/mocks/notifications";
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Notifications() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const notificationCount = mockNotifications.filter(n => !n.read).length;

  const getIconForType = (type: NotificationItem['type']) => {
    switch (type) {
      case 'comment': return <MessageSquareText className="h-4 w-4 text-blue-500" />;
      case 'like': return <Heart className="h-4 w-4 text-red-500" />;
      case 'share': return <Share2 className="h-4 w-4 text-green-500" />;
      case 'system': return <Info className="h-4 w-4 text-gray-500" />;
      default: return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="relative p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label={`View notifications (${notificationCount} unread)`}
        >
          <Bell className="h-5 w-5 text-gray-600" />
          {mounted && notificationCount > 0 && (
            <span className="absolute top-1 right-0 block h-5 w-5 transform -translate-y-1/2 translate-x-1/2">
              <span className="relative inline-flex rounded-full h-full w-full bg-red-600 text-white text-xs items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 md:w-96">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          {notificationCount > 0 && <span className="text-xs text-blue-600 font-normal">{notificationCount} New</span>}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {mockNotifications.length === 0 ? (
          <DropdownMenuItem disabled className="text-sm text-gray-500 text-center py-4">
            No new notifications
          </DropdownMenuItem>
        ) : (
          mockNotifications.slice(0, 5).map((notification) => (
            <DropdownMenuItem key={notification.id} className={cn("flex items-start gap-3 p-3", !notification.read && "bg-blue-50")}>
              {notification.actor ? (
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src={notification.actor.avatarUrl} alt={notification.actor.name} />
                  <AvatarFallback className="text-xs">
                    {notification.actor.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-8 h-8 flex items-center justify-center mt-0.5">
                  {getIconForType(notification.type)}
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm leading-snug text-gray-700">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-0.5">{notification.timestamp}</p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 rounded-full bg-blue-500 self-center ml-auto"></div>
              )}
            </DropdownMenuItem>
          ))
        )}
        {mockNotifications.length > 5 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-blue-600 hover:!bg-blue-50 !text-blue-600">
              View all notifications
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 