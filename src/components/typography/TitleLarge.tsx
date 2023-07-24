import TypographyProps from '../../interfaces/typography';

/**
 * Renders a large-sized title text with optional inline display. The component
 * will render a SPAN element if the inline prop is true, otherwise it will
 * render a H4 element.
 * @param props - inline, for defining the component as an SPAN element
 * and restProsps (like className, onClick, etc.).
 * @returns The rendered TitleLarge component.
 */

export default function TitleLarge(props: TypographyProps) {
  const { inline, ...restProps } = props;

  const PROPERTIES = [
    'color--black',
    'font-weight--500',
    'margin--0',
    'sm-font-size--16',
    'md-font-size--22',
    'line-height--150',
  ];

  const Component = inline ? 'span' : 'h4';

  return (
    <Component
      {...restProps}
      className={`${PROPERTIES.join(' ')} ${restProps.className}`}
    >
      {props.children}
    </Component>
  );
}
