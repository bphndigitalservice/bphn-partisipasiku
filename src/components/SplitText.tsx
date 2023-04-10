import { FunctionComponent, ReactElement } from 'react';
import { motion, MotionProps } from 'framer-motion';
import clsxtw from '@/lib/clsxtw';

interface SplitTextProps extends MotionProps {
  children: string;
  className: string;
}
const SplitText = ({ children, className, ...rest }: SplitTextProps) => {
  const words = children.split(' ');
  return (
    <div className={clsxtw('inline-block overflow-hidden', className)}>
      {words.map((word, i) => (
        <motion.span
          key={children + i}
          className='inline-block will-change-transform'
          {...rest}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
