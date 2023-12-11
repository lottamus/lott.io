import type { SVGProps } from "react";

import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

import { cn } from "../utils/classNames";

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconDefinition;
  fixedWidth?: boolean;
  spin?: boolean;
  size?: string;
};

// Simpler and smaller version of @fortawesome/react-fontawesome
export function Icon(props: IconProps) {
  const {
    children,
    className,
    fixedWidth,
    icon: iconProps,
    size,
    spin,
    ...rest
  } = props;

  const { icon, iconName, prefix } = iconProps;
  const [width, height, _aliases, _unicode, svgPathData] = icon;

  const dataFa = `${prefix}-${iconName}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      data-fa={dataFa}
      className={cn(className, "svg-inline--fa fill-current", dataFa, {
        "fa-spin": !!spin,
        "fa-fw": !!fixedWidth,
        [`fa-${size}`]: !!size,
      })}
      {...rest}
    >
      {children}
      {Array.isArray(svgPathData) ? (
        <g>
          <path d={svgPathData[0]} />
          <path d={svgPathData[1]} />
        </g>
      ) : (
        <path d={svgPathData} />
      )}
    </svg>
  );
}
