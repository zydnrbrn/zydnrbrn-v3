import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Project = {
  title: string
  description: string
  href: string
  role: string
  years: string[]
  stars?: number
}
