import React from 'react';
import styles from './index.less';

interface IProps {
  /** 图标名称，值为iconfont文件定义值 */
  iconName?: string;
  /** 自定义类名，控制样式 */
  className?: string;
  /** 样式属性 */
  style?: React.CSSProperties;
  /** 点击事件 */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const HxIcon = (props: IProps) => {
  const { iconName, className, style, onClick } = props;
  return (
    <svg className={`${styles.hxIcon} ${className}`} style={style} onClick={onClick} aria-hidden="true">
      <use xlinkHref={`#hxicon-${iconName}`} />
    </svg>
  );
};
export default HxIcon;
