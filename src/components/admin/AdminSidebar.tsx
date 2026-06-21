'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
  LayoutDashboard, Users, MessageSquare, BookOpen, FileText,
  HelpCircle, Calendar, BarChart3, Settings, LogOut, Zap, ChevronLeft
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Conversations', href: '/admin/conversations', icon: MessageSquare },
  { label: 'Appointments', href: '/admin/appointments', icon: Calendar },
  { label: 'Knowledge Base', href: '/admin/knowledge-base', icon: BookOpen },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
  { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

interface AdminSidebarProps {
  user: { name: string; email: string; role: string }
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      'flex flex-col bg-white border-r border-border transition-all duration-300 flex-shrink-0',
      collapsed ? 'w-16' : 'w-56'
    )}>
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-primary-sm flex-shrink-0">
          <Zap className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="font-display font-extrabold text-text-primary text-sm leading-tight">
            Nexus<br/>Admin
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-alt transition-colors"
        >
          <ChevronLeft className={cn('w-4 h-4 transition-transform duration-300', collapsed && 'rotate-180')} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                isActive ? 'admin-nav-item-active' : 'admin-nav-item-inactive',
                collapsed && 'justify-center px-2'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-border">
        {!collapsed && (
          <div className="px-3 py-2 mb-1">
            <p className="text-xs font-semibold text-text-primary truncate">{user.name}</p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
          </div>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className={cn('admin-nav-item-inactive w-full', collapsed && 'justify-center px-2')}
          title={collapsed ? 'Sign Out' : undefined}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  )
}
