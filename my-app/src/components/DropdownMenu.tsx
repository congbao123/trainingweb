import React, { useState, useRef, useEffect } from "react"
import "../styles/dropdown.css"

type DropdownMenuProps = {
  children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="dropdown">{children}</div>
}

export function DropdownMenuTrigger({
  children,
  asChild = false,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  return (
    <div className="dropdown-trigger" data-trigger>
      {children}
    </div>
  )
}

export function DropdownMenuContent({ children }: { children: React.ReactNode }) {
  return <div className="dropdown-content">{children}</div>
}

export function DropdownMenuItem({
  children,
  asChild = false,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  return (
    <div className="dropdown-item">
      {children}
    </div>
  )
}
