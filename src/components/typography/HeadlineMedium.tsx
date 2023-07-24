import TypographyProps from '../../interfaces/typography';

/**
 * Renders a small-sized body text with optional inline display. The component
 * will render a SPAN element if the inline prop is true, otherwise it will
 * render a H3 element.
 * @param props - The props for the BodySmall component.
 * @returns The rendered BodySmall component.
 */

export default function HeadlineMedium(props: TypographyProps) {
  const { inline, ...restProps } = props;

  const PROPERTIES = [
    'font-weight--400',
    'margin--0',
    'sm-font-size--22',
    'md-font-size--28',
    'line-height--150',
  ];

  const Component = inline ? 'span' : 'h2';

  return (
    <Component
      {...restProps}
      className={`${PROPERTIES.join(' ')} ${restProps.className}`}
    >
      {props.children}
    </Component>
  );
}
