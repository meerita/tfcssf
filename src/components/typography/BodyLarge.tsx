/**
 * Renders a large body text with optional inline display. The component will
 * render a SPAN element if the inline prop is true, otherwise it will render a
 * P element.
 *
 * @format
 * @param props - The props for the BodyLarge component.
 * @interface ITypography
 * @returns The rendered BodyLarge component.
 */

import { ITypography } from '@/interfaces/ITypography';

export default function BodyLarge(props: ITypography): JSX.Element {
  const { inline, ...restProps } = props;

  const baseCSSProperties = [
    'font-weight--300',
    'sm-font-size--14',
    'md-font-size--16',
    'lg-font-size--22',
    'xl-font-size--24',
    'xxl-font-size--28',
    'line-height--150',
  ];

  const Component = inline ? 'span' : 'p';

  return (
    <Component
      {...restProps}
      className={`${baseCSSProperties.join(' ')} ${props.className}`}
    >
      {props.children}
    </Component>
  );
}
