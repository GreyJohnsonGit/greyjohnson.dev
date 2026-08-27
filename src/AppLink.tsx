// React component that inherits all functionality from <a>, but is typed to only accept AppPagePath values for href
import { Link } from "@mui/material"
import type { LinkProps } from "@mui/material"
import type { AppPagePath } from "./AppPagePath"

export function AppLink(props: LinkProps & { href: AppPagePath }) {
  return <Link {...props} />
}