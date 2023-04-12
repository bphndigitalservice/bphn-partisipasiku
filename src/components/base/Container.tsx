import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import clsxtw from '@/lib/clsxtw';

type ContainerProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>;
export default function Container({
  children,
  className,
  ...rest
}: ContainerProps): ReactElement {
  return (
    <div
      {...rest}
      className={clsxtw('container w-[80%] p-6 md:p-4 mx-auto', className)}
    >
      {children}
    </div>
  );
}
