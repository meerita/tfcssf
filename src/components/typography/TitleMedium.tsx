import TypographyProps from '../../interfaces/typography';

/**
 * Renders a medium-sized title text with optional inline display. The component
 * will render a SPAN element if the inline prop is true, otherwise it will
 * render a H5 element.
 * @param props - The props for the TitleMedium component.
 * @returns The rendered TitleMedium component.
 */

export default function TitleMedium(props: TypographyProps) {
  const { inline, ...restProps } = props;

  const PROPERTIES = [
    'font-weight--700',
    'margin--0',
    'sm-font-size--14',
    'md-font-size--16',
    'line-height--150',
  ];

  const Component = inline ? 'span' : 'h5';

  return (
    <Component
      {...restProps}
      className={`${PROPERTIES.join(' ')} ${restProps.className}`}
    >
      {props.children}
    </Component>
  );
}
